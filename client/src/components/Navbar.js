import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <nav style={{ display: "none" }}>
          <button
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          >
            Logout
          </button>
        </nav>
      )
    } else if (this.props.login) {
      return (
        <nav>
          <Link to='/register'>
            <button
              id='register'
              name='register'
              active={location.pathname === '/register'}
              > Sign Up</button>
          </Link>
        </nav>
      )
    }
    else {
      return(
        <nav>
        <Link to='/login'>
          <button
            className='nav-login-btn'
            id='login'
            name='login'
            active={location.pathname === '/login'}
          >
            Login
          </button>
        </Link>
      </nav>
      )
    }
  }

  render() {
    return (
      <div>
        <nav>
          <Link to='/'>
            <item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          {this.rightNavItems()}
        </nav>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
