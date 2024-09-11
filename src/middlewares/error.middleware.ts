import { NextFunction, Request, Response } from "express"
import { CustomError } from "../helpers/error.helper"

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = err

  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  })
}
