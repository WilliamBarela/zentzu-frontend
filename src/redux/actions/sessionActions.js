import * as types from './actionTypes'
import {
  postLogin,
  logout
} from '../../api/sessionAdapter';

export function authenticateSuccess(authResponse) {
  const payload = {...authResponse};
  return {type: types.AUTHENTICATE_SUCCESS, payload}
}

export function authenticate(submission) {
  const { loginInfo, history } = submission;
  return function(dispatch) {
    postLogin(loginInfo, history)
      .then(authResponse => {
        dispatch(authenticateSuccess(authResponse));
      })
      .catch(error => {
        throw error;
      });
  }
}

export function authenticateDestroy(history) {
  logout(history);
  return { type: types.AUTHENTICATE_DESTROY }
}
