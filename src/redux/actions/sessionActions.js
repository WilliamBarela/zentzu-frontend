import * as types from './actionTypes'
import {
  postLogin
} from '../../api/sessionAdapter';

export function authenticateSuccess(authResponse) {
  const payload = { ...authResponse, historyy: window.history };
  return {type: types.AUTHENTICATE_SUCCESS, payload}
}

export function authenticate(loginInfo) {
  return function(dispatch) {
    postLogin(loginInfo)
      .then(authResponse => {
        dispatch(authenticateSuccess(authResponse));
      })
      .catch(error => {
        throw error;
      });
  }
}

export function authenticateDestroy() {
  return { type: types.AUTHENTICATE_DESTROY }
}
