import {
  AUTHENTICATE_SUCCESS,
  EXPIRE_SESSION
} from './actionTypes'
import {
  postLogin,
  logout
} from '../../api/sessionAdapter';
import {
  PROFILE
} from '../../api/endpoints';

export function authenticateSuccess(authResponse) {
  const payload = {...authResponse};
  return {type: AUTHENTICATE_SUCCESS, payload}
}

export function authenticate(submission) {
  const { loginInfo, history } = submission;
  return function(dispatch) {
    postLogin(loginInfo)
      .then(authResponse => {
        dispatch(authenticateSuccess(authResponse));
      })
      .then(() => history.push(PROFILE))
      .catch(error => {
        throw error;
      });
  }
}

export function expireSession(history) {
  logout(history);
  return { type: EXPIRE_SESSION }
}
