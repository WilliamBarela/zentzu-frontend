import React from 'react';
import {
  Link
} from 'react-router-dom';

import SignOut from './SignOut';

class Profile extends React.Component {
  render(){
    return (
      <>
        <SignOut />
        <h1>Hello</h1>
        <Link to='/dashboard'>Dashboard</Link>
      </>
    )
  }
}

export default Profile;
