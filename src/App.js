import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login.js';
import Profile from './components/Profile.js';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
