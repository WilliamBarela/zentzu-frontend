import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case types.AUTHENTICATE_SUCCESS:
      if(action.payload.jwt_token) {
        action.payload = {...action.payload, authenticated: true}
      }
      return action.payload
    case types.AUTHENTICATE_DESTROY:
      return {}
    default:
      return state;
  }
}
