import {
  URI,
  LOGIN,
  SIGNUP
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

const persistLogin = (response) => {
  if(response.jwt_token) {
    storeJWT(response.jwt_token);
  }

  return response
}

export function postLogin (loginInfo) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({person: loginInfo})
  }

  return fetch(URI(LOGIN), payload)
          .then(r => r.json())
          .then(response => persistLogin(response))
}

export function postSignUp (signUpInfo) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({person: signUpInfo})
  }

  return fetch(URI(SIGNUP), payload)
          .then(r => r.json())
          .then(response => persistLogin(response))
}

export function logout (history) {
  removeJWT();
  redirectTo(history, LOGIN);
}
