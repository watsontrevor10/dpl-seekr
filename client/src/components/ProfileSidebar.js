

const Sidebar = (props) => {

const { auth: { user, handleLogout, }, location, } = props;
  return (
    <>
      <div className="sidebar">
        <div className="home-sidebar-icons">
          <div>
            <div onClick={show}> <img style={icon} src={user.image || defaultImage} /> </div>
          </div>
          
          {user.name}
        </div>

        {openModal ? <ProfileModal add={props.add} hide={hide} show={openModal}
        /> : null}

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