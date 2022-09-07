import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  Email: String,
  EventDate: Date,
})

const Event = mongoose.model('Event', eventSchema)

export default Event
