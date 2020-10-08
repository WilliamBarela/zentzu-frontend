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
  SIGNUP,
  DASHBOARD
} from './api/endpoints';

import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={DASHBOARD}>
          <Dashboard />
        </Route>
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
