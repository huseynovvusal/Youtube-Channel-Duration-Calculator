import express from "express"
import apicache from "apicache"
import dotenv from "dotenv"

import channelDurationRouter from "./channelDuration.router"

const router = express.Router()
const cache = apicache.middleware

router.use(
  "/channel-duration",
  cache(process.env.API_CACHE_TIME),
  channelDurationRouter
)

export default router
