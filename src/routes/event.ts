import express from 'express'
import { createEvent } from '../controllers/createEvent/index'

const router = express.Router()

router.post('/', async (req, res, next) => {
  const { firstName, lastName, email, date } = req.body
  try {
    const { newEvent } = await createEvent(firstName, lastName, email, date)
    res.status(201).json(newEvent)
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
})

export default router
