import React, { useState } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import home from "../images/internet-white.png";
import clipboard from "../images/clipboardsWhite.png";
import user from "../images/userWhite.png";

const MobileMenu = () => {

  const [showMenu, setShowMenu] = useState(false)

  const displayMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
    <div className="mobile-menu" onClick={displayMenu} > 
        {
          showMenu
            ? (
              <>
              <div className="menu">
              <svg className="menu-svg toggle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
              </svg>
                <ul className="dropdown">
                <div className="arrow-up"></div>
                  <Link to="/">
                    <img src={home} className="mobile-home-icon"/>
                    home
                  </Link>
                  <Link to="/board">
                   <img src={clipboard} className="mobile-clipboard-icon"/>
                    board
                  </Link>
                  <Link to="profile">
                    <img src={user} className="mobile-user-icon"/>
                    profile
                  </Link>
                </ul>
              </div>
              </>
            )
            : (
              <svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
              </svg>
            )
        }
      </div>
    </>
  )
}

export default MobileMenu;