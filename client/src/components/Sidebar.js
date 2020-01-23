import React, {useState} from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom';
import board from "../images/clipboards.png"
import logout from "../images/ui.png"
import ProfileModal from "./ProfileModal"
import defaultImage from "../images/user.png"

const Sidebar = (props) => {

  const [openModal, setOpenModal] = useState(false)

  const show = () => {
    setOpenModal(true);
  }
  const hide = () => {
    setOpenModal(!openModal);
  }

  const { auth: {user, handleLogout, } } = props;
  return (
    <>
      <div className="sidebar">
        <div className="home-sidebar-icons">
          <Link to='/'>
            <svg className="devpoint-logo-icon" alt="DevPoint logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
              <title>DPL-logo-outlines</title>
              <path d="M177.61,167.12,127.83,32h10A6.26,6.26,0,0,0,144,26V14a6.26,6.26,0,0,0-6.17-6h-84A5.75,5.75,0,0,0,48,14V26a5.75,5.75,0,0,0,5.83,6H54V14h83.84a.35.35,0,0,1,.16.24V25.76a.33.33,0,0,1-.17.24H119.23l3,8.07,22.71,61.65C108.31,92.7,104.69,65,58.42,64l11-30,3-8.07H60v6h3.83L52,64.09h0L38.42,101,14,167.12a15.37,15.37,0,0,0-1,6.57,11.9,11.9,0,0,0,.21,1.48C14.37,180.42,19,184,25.84,184h140C175.77,184,181,176.44,177.61,167.12ZM128,112a16,16,0,1,1-16,16A16,16,0,0,1,128,112Zm-20,48a12,12,0,1,1-12-12A12,12,0,0,1,108,160ZM80,88a24,24,0,1,1-24,24A24,24,0,0,1,80,88Z" />
            </svg>
          </Link>
          <Link to='/board'>
            <img src={board} className="board-icon"></img>
          </Link>
        </div>

        <div className="logout">
          <div>
            <div onClick={show}> <img style={icon} src={user.image || defaultImage} /> </div>
          </div>
          <div>
            {user.name}
          </div>
          {openModal ? <ProfileModal add={props.add} hide={hide} show={openModal}
          /> : null}
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

export class ConnectedSidebar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Sidebar {...this.props} auth={auth} />
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
export default withRouter(ConnectedSidebar); 