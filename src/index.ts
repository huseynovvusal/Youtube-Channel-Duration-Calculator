import express from "express"
import dotenv from "dotenv"

import apiRouter from "./routers/index"
import { errorHandler } from "./middlewares/error.middleware"

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

//? Routers
app.use("/api", apiRouter)

//? Error Handling
app.use(errorHandler)

app.listen(3000, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
