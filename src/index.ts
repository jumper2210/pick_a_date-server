import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'

import eventRoutes from './routes/event'

dotenv.config()

const app = express()

app.use('/event', eventRoutes)
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const PORT = process.env.PORT

MongoClient.connect(process.env.CONNECTION_URL!)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message))
