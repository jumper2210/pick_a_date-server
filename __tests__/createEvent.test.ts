const mockingoose = require('mockingoose')
import eventModel from '../src/models/event'
import { createEvent } from '../src/controllers/createEvent/index'

const mockEventData = {
  firstName: 'Adam',
  lastName: 'Kowalski',
  email: 'adam@gmail.com',
  date: '2022-09-11T08:38:34.590Z',
}

describe('New event', () => {
  it('can be created correctly', async () => {
    mockingoose(eventModel).toReturn(mockEventData, 'save')
    const { firstName, lastName, email, date } = mockEventData
    const newEvent = await createEvent(firstName, lastName, email, date)

    expect(newEvent.newEvent.firstName).toEqual(firstName)
    expect(newEvent.newEvent.lastName).toEqual(lastName)
    expect(newEvent.newEvent.email).toEqual(email)
  })
})
