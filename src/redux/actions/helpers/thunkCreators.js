export function createActionStatus(statusHash) {
  const { failedResponseHas, failedType, successType } = statusHash;

  return (response) => {
    const type = response[failedResponseHas] ? failedType : successType;
    return { type, response }
  }
}

export function createThunkWithRedirect(thunkCreatorHash) {
  const { dataTarget, apiCall, actionStatus, redirectTo } = thunkCreatorHash;

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
        .then( () => (stowedApiResponse.jwt_token ? history.push(redirectTo) : null) )
        .catch(error => {
          throw error;
        })
    }
  }
}
