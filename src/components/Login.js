import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sessionActions from '../redux/actions/sessionActions.js';
import '../css/login.css'
import { bindActionCreators } from 'redux';

class Login extends Component {
  state = {
    loginInfo: {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const loginInfo = {
      ...this.state.loginInfo,
      [e.target.name]: e.target.value
    };
    this.setState({loginInfo});
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.createSession(this.state.loginInfo);
    this.props.actions.createSession(this.state.loginInfo);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.loginInfo.email}
        />
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.loginInfo.password}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginInfo: state.loginInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // createSession: loginInfo => dispatch(sessionActions.createSession(loginInfo))
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
