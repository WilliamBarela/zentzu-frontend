import {
  AUTHENTICATE_SUCCESS,
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

// function registrationStatus(signUpResponse) {
//   const type = signUpResponse.errors ? REGISTRATION_FAILED : REGISTRATION_SUCCESS
//   return { type, signUpResponse }
// }


const registrationStatus = createActionStatus("errors",
                                              REGISTRATION_FAILED,
                                              REGISTRATION_SUCCESS);

export const registration = createThunkWithRedirect("signUpInfo",
                                                    postSignUp,
                                                    registrationStatus,
                                                    PROFILE);

// export function registration(submission) {
//   const { signUpInfo, history } = submission;
//   return function(dispatch) {
//     postSignUp(signUpInfo)
//       .then(signUpResponse => dispatch(registrationStatus(signUpInfo)))
//       //.then( () => history.push(PROFILE))
//       .catch(error => {
//         throw error;
//       });
//   }
// }

export function authenticateSuccess(authResponse) {
  const payload = {...authResponse};
  return {type: AUTHENTICATE_SUCCESS, payload}
}

export function authenticate(submission) {
  const { loginInfo, history } = submission;
  let AR;
  return function(dispatch) {
    postLogin(loginInfo)
      .then(authResponse => {
        AR = authResponse;
        dispatch(authenticateSuccess(authResponse));
      })
      .then(() => (AR.jwt_token ? history.push(PROFILE) : null))
      .catch(error => {
        throw error;
      });
  }
}

export function expireSession(history) {
  logout(history);
  return { type: EXPIRE_SESSION }
}
