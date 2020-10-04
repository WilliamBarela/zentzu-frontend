import {
  AUTHENTICATE_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from '../actions/actionTypes';

const authState = action => {
  const authenticated = action.response.jwt_token ? true : false
  return { authenticated }
}

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {...action.payload, ...authState(action)}
    case REGISTRATION_SUCCESS:
      return {...action.payload, ...authState(action)}
    case REGISTRATION_FAILED:
      return action.payload
    default:
      return state;
  }
}
