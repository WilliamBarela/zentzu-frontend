import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import {
  PROFILE,
  LOGIN
} from './api/endpoints';

import Login from './components/Login.js';
import Profile from './components/Profile.js';

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
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
