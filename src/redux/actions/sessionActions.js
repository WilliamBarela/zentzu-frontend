import {
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  EXPIRE_SESSION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from './actionTypes'
import {
  postLogin,
  postSignUp,
  logout
} from '../../api/sessionAdapter';
import {
  createActionStatus,
  createThunkWithRedirect
} from './helpers/thunkCreators';
import {
  DASHBOARD
} from '../../api/endpoints';

const registrationStatus = createActionStatus({
  failedResponseHas: "errors",
  failedType: REGISTRATION_FAILED,
  successType: REGISTRATION_SUCCESS
});

export const registration = createThunkWithRedirect({
  dataTarget: "signUpInfo",
  apiCall: postSignUp,
  actionStatus: registrationStatus,
  redirectTo: DASHBOARD
});

const authenticateStatus = createActionStatus({
  failedResponseHas: "errors",
  failedType: AUTHENTICATE_FAILED,
  successType: AUTHENTICATE_SUCCESS
});

export const authenticate = createThunkWithRedirect({
  dataTarget: "loginInfo",
  apiCall: postLogin,
  actionStatus: authenticateStatus,
  redirectTo: DASHBOARD
});

export function expireSession(history) {
  logout(history);
  return { type: EXPIRE_SESSION }
}
