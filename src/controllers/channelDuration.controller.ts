import { NextFunction, Request, Response } from "express"
import { google } from "googleapis"
import dotenv from "dotenv"

import { CustomError } from "../helpers/error.helper"
import { convertISOtoSeconds, formatDuration } from "../utils/date.utils"

dotenv.config()

const youtube = google.youtube({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
})

export const getChannelDuration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { channelId } = req.params

  // !!
  console.log("channelId:", channelId)

  let totalSeconds = 0
  let pageToken: string | undefined = undefined

  const channelResponse = await youtube.channels.list({
    part: ["contentDetails"],
    id: [channelId],
  })

  if (
    !channelResponse.data.items?.[0].contentDetails?.relatedPlaylists?.uploads
  ) {
    return next(new CustomError(400, "Please provide a valid channel id"))
  }

  do {
    const uploadsPlaylistId =
      channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads

    const playlistResponse: any = await youtube.playlistItems.list({
      part: ["snippet"],
      playlistId: uploadsPlaylistId,
      maxResults: 50,
      pageToken: pageToken,
    })

    pageToken = playlistResponse.data.nextPageToken

    for (let i = 0; i < playlistResponse.data.items.length; i++) {
      const videoId = playlistResponse.data.items[i].snippet.resourceId.videoId

      const videoResponse = await youtube.videos.list({
        part: ["contentDetails"],
        id: [videoId],
      })

      const duration = videoResponse.data.items?.[0].contentDetails?.duration

      totalSeconds += convertISOtoSeconds(duration as string)
    }
  } while (pageToken)

  res.json({
    success: true,
    data: {
      channelId,
      totalSeconds,
      duration: formatDuration(totalSeconds),
    },
  })
}
