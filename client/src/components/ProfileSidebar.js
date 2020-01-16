import React, {useState} from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom';
import logout from "../images/ui.png"

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const ProfileSidebar = (props) => {

const { auth: { user, handleLogout, }, location, } = props;
  return (
    <>
      <div className="sidebar">
        <div className="home-sidebar-icons">
          <div>
            <div> <img style={icon} src={user.image || defaultImage} /> </div>
          </div>
          
          {user.name}
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
  height: '40px',
  width: '40px',
  borderRadius: '25px',
}

const color = {
  color: 'rgb(89, 81, 117)'
}
export default withRouter(ConnectedProfileSidebar); 