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
    this.props.actions.authenticate(this.state.loginInfo);
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
        <h4>{this.props.message}</h4>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.sessionReducer.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
