import express from 'express'
import { addEvent } from '../controllers/event'

const router = express.Router()

router.post('/', addEvent)

export default router
