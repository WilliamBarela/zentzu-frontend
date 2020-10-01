import * as types from './actionTypes'
import {
  postLogin
} from '../../api/sessionAdapter';

export function createSessionSuccess(authResponse) {
  return {type: types.CREATE_SESSION_SUCCESS, authResponse}
}

export function createSession(loginInfo) {
  return function(dispatch) {
    postLogin(loginInfo)
      .then(authResponse => {
        dispatch(createSessionSuccess(authResponse));
      })
      .catch(error => {
        throw error;
      });
  }
}
