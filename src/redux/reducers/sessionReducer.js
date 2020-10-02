import * as types from '../actions/actionTypes';

const storeJWT = jwt => {
  localStorage.setItem('jwt', jwt);
}

const removeJWT = () => {
  localStorage.removeItem('jwt');
}

const redirectTo = (action, location) => {
  action.payload.history.push(location);
}

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case types.AUTHENTICATE_SUCCESS:
      if(action.payload.jwt_token) {
        action.payload = {...action.payload, authenticated: true}
        storeJWT(action.payload.jwt_token);
        redirectTo(action, "/profile");
      }
      return action.payload
    case types.AUTHENTICATE_DESTROY:
      removeJWT();
      return {}
    default:
      return state;
  }
}
