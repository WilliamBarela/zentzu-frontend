import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { expireSession } from '../redux/actions/sessionActions';

class SignOut extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.actions.expireSession(this.props.history);
  }

  render () {
    return (
      <button onClick={this.handleClick}>Sign Out</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      expireSession: (history) => {dispatch(expireSession(history))}
    }
  }
}

export default connect(null, mapDispatchToProps)(withRouter(SignOut));
