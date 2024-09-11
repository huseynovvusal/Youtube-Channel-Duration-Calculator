import express from "express"

import channelDurationRouter from "./channelDuration.router"

const router = express.Router()

router.use("/channel-duration", channelDurationRouter)

export default router
