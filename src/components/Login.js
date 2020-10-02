import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sessionActions from '../redux/actions/sessionActions.js';
import '../css/login.css'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        email: '',
        password: ''
      }
    };
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
    const submission = { loginInfo: this.state.loginInfo, history: this.props.history }
    this.props.actions.authenticate(submission);
  }

  render() {
    return(
      <main>
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
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
