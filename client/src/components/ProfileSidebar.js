import React, { useState } from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom';
import logout from "../images/uiWhite.png"
import defaultImage from "../images/userWhite.png"
import board from "../images/clipboardsWhite.png"

const ProfileSidebar = (props) => {

  const { auth: { user, handleLogout, }, location, } = props;
  return (
    <>
      <div className="psidebar">
        <div className="home-sidebar-icons">
          <div>
            <Link to="/"><div> <img style={icon} src={user.image || defaultImage} /> </div> </Link>
          </div>
          {user.name}
          <br />
          <br />
          <br />
        <Link to='/board'>
          <img src={board}/>
        </Link>
        </div>
        <div className="logout">
          <img
            className="logout-icon"
            src={logout}
            onClick={() => handleLogout(props.history)}
          >
          </img>
        </div>
      </div>
    </>
  );
}

export class ConnectedProfileSidebar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <ProfileSidebar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

const icon = {
  height: '60px',
  width: '60px',
  borderRadius: '45px',
  border: '2px solid white',
}

const color = {
  color: 'rgb(89, 81, 117)'
}
export default withRouter(ConnectedProfileSidebar); 