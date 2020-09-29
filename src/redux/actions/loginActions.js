export function createSession(loginInfo) {
  return {type: "CREATE_SESSION", loginInfo}
}
