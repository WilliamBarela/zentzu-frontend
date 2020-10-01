import * as types from '../actions/actionTypes';

const storeJWT = jwt => {
  localStorage.setItem('jwt', jwt);
}

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case types.AUTHENTICATE_SUCCESS:
      storeJWT(action.authResponse.jwt_token);
      return action.authResponse
    default:
      return state;
  }
}
