import { Request, Response, NextFunction } from 'express'
import Event from '../../models/event'

export const createEvent = async (
  firstName: string,
  lastName: string,
  email: string,
  date: string
) => {
  try {
    const newEvent = new Event({
      firstName,
      lastName,
      email,
      date,
    })
    await newEvent.save()
    return {
      newEvent,
    }
  } catch (err: any) {
    throw err
  }
}
