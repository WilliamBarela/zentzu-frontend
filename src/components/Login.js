import React, { Component } from 'react';
import '../css/login.css'

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
    alert(this.state.loginInfo.email);
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

export default Login;
