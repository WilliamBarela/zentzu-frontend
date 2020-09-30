import * as types from './actionTypes'

export function createSession(loginInfo) {
  return {type: types.CREATE_SESSION, loginInfo}
}
