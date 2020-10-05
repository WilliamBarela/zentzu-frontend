import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Link,
  withRouter
} from 'react-router-dom';
import {
  LOGIN
} from '../api/endpoints';
import '../css/signup.css';

import ListErrors from './ListErrors';
import { registration } from '../redux/actions/sessionActions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpInfo: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        summary: ''
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state.signUpInfo);
    const submission = { signUpInfo: this.state.signUpInfo, history: this.props.history }
    this.props.actions.registration(submission);
  }

  handleChange = e => {
    const signUpInfo = {
      ...this.state.signUpInfo,
      [e.target.name]: e.target.value
    };
    this.setState({...this.state, signUpInfo})
  }

  render() {
    return(
      <>
        <Link to={LOGIN}>Login</Link>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.signUpInfo.first_name}
            placeholder="first name"
          />
          <input
            type="text"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.signUpInfo.last_name}
            placeholder="last name"
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.signUpInfo.email}
            placeholder="user@domain.com"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.signUpInfo.password}
            placeholder="******"
          />
          <textarea
            name="summary"
            onChange={this.handleChange}
            value={this.state.signUpInfo.summary}
            placeholder="About you ..."
          />
          <ListErrors errors={this.props.errors} />
          <input type="submit" value="Register"/>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.sessionReducer.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      registration: (submission) => {dispatch(registration(submission))}
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
