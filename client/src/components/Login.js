import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import Navbar from "./Navbar";
import LoginModal from './LoginModal';


class Login extends React.Component {
  state = { email: '', password: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
    const toggleLoginError = this.props.auth.loginError;

    return (
      <>
      <segment className="login-main-container">
        <div className="login-container">
          <h1>Login</h1>
          <form
            className="login-form-container"
            onSubmit={this.handleSubmit}
          >
            <input
              label="Email"
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
              className="login-input"
            />
            <input
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
              className="login-input"
            />
            <segment textAlign='center' basic>
              <button primary type='submit'>Continue</button>
            </segment>
          </form>
          <Navbar login={this.state}/>
        </div>
      </segment>
      { toggleLoginError ? <LoginModal toggleError={this.props.auth.toggleLoginError} message="Incorrect username or password." /> : null }
      </>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
