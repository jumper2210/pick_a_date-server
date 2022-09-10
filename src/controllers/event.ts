import { Request, Response, NextFunction } from 'express'
import Event from '../models/event'

export const addEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const event = req.body
  const newEvent = new Event(event)

  try {
    await newEvent.save()
    res.status(201).json(newEvent)
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
