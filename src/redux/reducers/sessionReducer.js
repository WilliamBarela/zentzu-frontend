import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case types.CREATE_SESSION:
      alert(action.loginInfo.email);
      return {...state, email: action.loginInfo.email};
    default:
      return state;
  }
}
