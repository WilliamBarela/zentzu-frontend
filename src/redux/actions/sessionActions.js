import * as types from './actionTypes'
import {
  postLogin
} from '../../api/sessionAdapter';

export function authenticateSuccess({authResponse, history}) {
  //const payload = { ...authResponse, historyy: window.history };
  const payload = {...authResponse, history};
  return {type: types.AUTHENTICATE_SUCCESS, payload}
}

export function authenticate(submission) {
  const { loginInfo, history } = submission;
  return function(dispatch) {
    postLogin(loginInfo)
      .then(authResponse => {
        dispatch(authenticateSuccess({authResponse, history}));
      })
      .catch(error => {
        throw error;
      });
  }
}

export function authenticateDestroy() {
  return { type: types.AUTHENTICATE_DESTROY }
}
