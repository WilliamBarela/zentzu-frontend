import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  LOGIN
} from '../api/endpoints';

class SignUp extends Component {
  render() {
    return(
      <>
        <Link to={LOGIN}>Login</Link>
        <h1>Sign Up</h1>
      </>
    )
  }
}

export default SignUp;
