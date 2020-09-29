export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_SESSION":
      alert(action.loginInfo.email);
      return {...state, email: action.loginInfo.email};
    default:
      return state;
  }
}
