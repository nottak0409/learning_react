import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return events
    default:
      return events
  }
}
