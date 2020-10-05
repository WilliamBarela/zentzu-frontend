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
  PROFILE
} from '../../api/endpoints';

function createActionStatus(check, action_failed, action_success) {
  return (response) => {
    const type = response[check] ? action_failed : action_success
    return { type, response }
  }
}

function createThunkWithRedirect(dataTarget, apiCall, actionStatus, newLocation) {
  return (submission) => {
    const data = submission[dataTarget];
    const history = submission.history;
    let stowedApiResponse;

    return function(dispatch) {
      apiCall(data)
        .then(apiResponse => {
          stowedApiResponse = apiResponse;
          dispatch(actionStatus(apiResponse))
        })
        .then( () => (stowedApiResponse.jwt_token ? history.push(newLocation) : null) )
        .catch(error => {
          throw error;
        })
    }
  }
}

const registrationStatus = createActionStatus("errors",
                                              REGISTRATION_FAILED,
                                              REGISTRATION_SUCCESS);

export const registration = createThunkWithRedirect("signUpInfo",
                                                    postSignUp,
                                                    registrationStatus,
                                                    PROFILE);

const authenticateStatus = createActionStatus("message",
                                              AUTHENTICATE_FAILED,
                                              AUTHENTICATE_SUCCESS);

export const authenticate = createThunkWithRedirect("loginInfo",
                                                    postLogin,
                                                    authenticateStatus,
                                                    PROFILE);

export function expireSession(history) {
  logout(history);
  return { type: EXPIRE_SESSION }
}
