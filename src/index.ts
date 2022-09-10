import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import eventRoutes from './routes/event'
import mongoose, { ConnectOptions } from 'mongoose'

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(bodyParser.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})

app.use('/event', eventRoutes)

mongoose
  .connect(process.env.CONNECTION_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.log('Error Connectiong to the Database')
  })
