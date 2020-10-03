import { AUTHENTICATE_SUCCESS } from '../actions/actionTypes';

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      if(action.payload.jwt_token) {
        action.payload = {...action.payload, authenticated: true}
      }
      return action.payload
    default:
      return state;
  }
}
