import express from "express"
import { getChannelDuration } from "../controllers/channelDuration.controller"

const router = express.Router()

router.get("/:channelId", getChannelDuration)

export default router
