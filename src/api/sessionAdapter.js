import {
  LOGIN
} from './endpoints';

export function postLogin (loginInfo) {
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
}
