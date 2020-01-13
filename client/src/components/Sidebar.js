import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'

const Sidebar = (props) => {
  const { auth: { user, handleLogout, }, location, } = props;
  return(
    <>
      <div className="sidebar">
        <Link to='/'>
         <h1>DPL Logo</h1>
        </Link>
        <div>home</div>
        <div>username</div>
      </div>
      <button
          className="logout-btn"
          name='logout'
          onClick={ () => handleLogout(props.history) }
        >logout
      </button>
    </>
  );
}

export class ConnectedSidebar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Sidebar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedSidebar); 