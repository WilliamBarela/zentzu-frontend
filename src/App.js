import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import {
  PROFILE,
  LOGIN,
  SIGNUP
} from './api/endpoints';

import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path={PROFILE}>
          <Profile />
        </PrivateRoute>
        <Route path={LOGIN}>
          <Login />
        </Route>
        <Route path={SIGNUP}>
          <SignUp />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
