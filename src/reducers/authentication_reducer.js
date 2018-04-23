import { CHANGE_AUTH } from '../actions/index'

export default function(state = {}, action) {
  switch (action.type) {
  case CHANGE_AUTH:
    return action.payload
  default:
    return state
  }
}
