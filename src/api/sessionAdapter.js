import {
  LOGIN
} from './endpoints';

const storeJWT = jwt => {
  localStorage.setItem('jwt', jwt);
}

const removeJWT = () => {
  localStorage.removeItem('jwt');
}

const redirectTo = (history, location) => {
  history.push(location);
}

const persistLogin = (response, history) => {
  if(response.jwt_token) {
    storeJWT(response.jwt_token);
    redirectTo(history, "/profile");
  }

  return response
}

export function postLogin (loginInfo, history) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({person: loginInfo})
  }

  return fetch(LOGIN, payload)
          .then(r => r.json())
          .then(response => persistLogin(response, history))
}

export function logout (history) {
  removeJWT();
  redirectTo(history, "/");
}
