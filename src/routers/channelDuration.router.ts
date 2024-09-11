import express from "express"
import dotenv from "dotenv"
import apicache from "apicache"

import { getChannelDuration } from "../controllers/channelDuration.controller"

const router = express.Router()
const cache = apicache.middleware

router.get("/:channelId", cache(process.env.API_CACHE_TIME), getChannelDuration)

export default router
