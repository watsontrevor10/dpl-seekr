import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import Dropzone from 'react-dropzone';
import Navbar from "./Navbar";
import LoginModal from './LoginModal';


class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', name: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ name, email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, name } = this.state;
    const registerError = this.props.auth.registerError;
    const toggleRegister = this.props.auth.toggleRegister;

    return (
      <>
        <segment className="login-main-container">
          <div className="login-container register">
            <h1>Sign Up</h1>
            <form 
              className="login-form-container" 
              onSubmit={this.handleSubmit}>
              <input
                label="Name"
                required
                autoFocus
                name='name'
                value={name}
                placeholder='Name'
                onChange={this.handleChange}
                className="register-input"
              />
              <input
                label="Email"
                required
                autoFocus
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
                className="register-input"
              />
              <input
                label="Password"
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
                className="register-input"
              />
              <input
                label="Password Confirmation"
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Confirm Password'
                type='password'
                onChange={this.handleChange}
                className="register-input"
              />
              <segment textAlign='center' basic>
                <button primary type='submit'>Submit</button>
              </segment>
            </form>
            <Navbar />
          </div>
        </segment>
        <center> { registerError ? <LoginModal toggleError={toggleRegister} message="Email already in use." /> : null } </center>
      </>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
