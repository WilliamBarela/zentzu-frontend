import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';

import {
  LOGIN
} from '../api/endpoints';

import { connect } from 'react-redux';

function PrivateRoute(props) {
  const componentToRender = () => {
    const { location, children, authenticated } = props;
    const component = (
      authenticated ?
      (children) :
      ( <Redirect to={{pathname: LOGIN, state: { from: location }}} />));

    return component
  }

  return (
    <Route render={componentToRender} />
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.sessionReducer.authenticated
  }
}

export default connect(mapStateToProps)(PrivateRoute)
