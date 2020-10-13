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
  DASHBOARD,
  TASKS
} from './api/endpoints';

import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard';
import Tasks from './components/tasks';

function App() {
  // checkout this article on routes with props
  // https://ui.dev/react-router-v4-pass-props-to-components/
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
