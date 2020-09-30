import * as types from '../actions/actionTypes';
import { postLogin } from '../../api/sessionAdapter';

export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case types.CREATE_SESSION:
      //alert(action.loginInfo.email);

      postLogin(action.loginInfo).then(j => console.log(j));
      return {...state, email: action.loginInfo.email};
    default:
      return state;
  }
}
