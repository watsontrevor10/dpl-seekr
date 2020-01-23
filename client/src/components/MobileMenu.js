import React, { useState } from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom';
import home from "../images/internet-white.png";
import clipboard from "../images/clipboardsWhite.png";
import logout from "../images/uiWhite.png"
import userWhite from "../images/userWhite.png"

const MobileMenu = (props) => {

  const [showMenu, setShowMenu] = useState(false)

  const displayMenu = () => {
    setShowMenu(!showMenu);
  }

  const { auth: { user, handleLogout, } } = props;
  return (
    <>
      <div className="mobile-menu" onClick={displayMenu} >
        {
          showMenu
            ? (
              <>
                <div className="menu">
                  <svg
                    className="menu-svg toggle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      d="M0 0h24v24H0V0z"
                    />
                    <path
                      d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                    />
                  </svg>
                  <ul className="dropdown">
                    <div className="arrow-up"></div>
                    <Link to="/">
                      <img src={home} className="mobile-home-icon" />
                      home
                  </Link>
                    <Link to="/board">
                      <img src={clipboard} className="mobile-clipboard-icon" />
                      board
                  </Link>
                    <Link to="profile">
                      <img src={userWhite} className="mobile-user-icon" />
                      profile
                  </Link>
                    <Link>
                      <img
                        className="mobile-logout-icon"
                        src={logout}
                        onClick={() => handleLogout(props.history)}
                      >
                      </img>
                      logout
                    </Link>
                  </ul>
                </div>
              </>
            )
            : (
              <svg
                className="menu-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  d="M0 0h24v24H0V0z"
                />
                <path
                  d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                />
              </svg>
            )
        }
      </div>
    </>
  )
}

export class ConnectedMobileMenu extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <MobileMenu {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedMobileMenu);