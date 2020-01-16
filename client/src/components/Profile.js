import React, { Fragment, } from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import Dropzone from 'react-dropzone'
import ProfileSidebar from "./ProfileSidebar"
import MobileMenu from "./MobileMenu"



const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class Profile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <>
        <div className="new-job">
          <div className="main-home-container">
              <div className="main-sidebar-container">
                <ProfileSidebar />
              </div>
              <div style={profilePadding}>
                <div className="mobile-menu-container">
                  <MobileMenu />
                </div>
                <div>
                  <img style={profilepic} src={user.image || defaultImage} />
                </div>
                <div style={namePad}>
                  <h1>{user.name}</h1>
                  <br />
                  <h4>{user.email}</h4>
                  <button style={btn} onClick={this.toggleEdit}>Edit</button>
                </div>
              </div>
          </div>
        </div>
      </>
    )
  }

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email } } = this.state;
    return (
      <>
        <div className="main-home-container">
          <div style={profileContainer}>
            <div className="main-sidebar-container">
              <Sidebar />
            </div>
            <div style={profilePadding}>
              <div className="mobile-menu-container">
                <MobileMenu />
              </div>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <div>
                      <div style={drop}>
                        <Dropzone
                          onDrop={this.onDrop}
                          multiple={false}
                          disableClick
                        >
                          {({ getRootProps, getInputProps, isDragActive }) => {
                            return (
                              <div
                                {...getRootProps()}
                                style={styles.dropzone}
                              >
                                <input {...getInputProps()} />
                                {
                                  isDragActive ?
                                    <p>Drop files here...</p> :
                                    <center><p>Image Goes Here</p></center>
                                }
                              </div>
                            )
                          }}
                        </Dropzone>
                      </div>
                    </div>

                    <div style={edit}>
                      <input
                        label="Name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        required
                        style={{ display: 'flex', flexGrow: '1' }}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div style={edit}>
                      <input
                        label="Email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        required
                        style={{ display: 'flex', flexGrow: '1' }}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div style={drop}>
                      <button style={btn}>Update</button>
                      <button style={btn} onClick={this.toggleEdit}>Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  toggleEdit = () => {
    this.setState(state => {
      return { editing: !state.editing, };
    })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }

  render() {
    const { editing, } = this.state;
    return (
      <>
        <div style={profileContainer}>
          {editing ? this.editView() : this.profileView()}
        </div>
      </>
    )
  }

  componentDidMount() {
    const { auth: { user: { name, email, }, }, } = this.props;
    this.setState({ formValues: { name, email, }, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, file, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: "",
      },
    });
  }


}

const ConnectedProfile = (props) => (
  <>
    <AuthConsumer>
      {auth =>
        <Profile {...props} auth={auth} />
      }
    </AuthConsumer>
  </>
)

const profilepic = {
  height: '200px',
  width: '200px',
  borderRadius: '150px',
}

const namePad = {
  margin: '1.5rem'
}

const drop = {
  margin: '2.5rem',
}

const profileContainer = {
  display: 'flex',
}

const profilePadding = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  height: 'fit-content',
  padding: '5rem',
  placeContent: 'center',
  borderRadius: '10px',
  color: 'white',
  margin: '5rem',
  backgroundColor: '#675e84'
}

const edit = {
  backgroundColor: 'var(--gray - 4)',
  border: 'none',
  padding: '0.3rem',
  borderRadius: '5px',
  transition: 'all .2s',
  transitionProperty: 'all',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease',
  transitionDelay: '0s',
  margin: '0.2rem',
  fontSize: '0.8rem',
  maxWidth: '36rem',
  display: 'flex',
}

const btn = {
  backgroundColor: 'var(--gray-4)',
  border: 'none',
  padding: '0.3rem',
  borderRadius: '5px',
  transition: 'all .2s',
  transitionProperty: 'all',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease',
  transitionDelay: '0s',
  margin: '0.2rem',
  fontSize: '0.8rem',
  width: '6rem',
}

const styles = {
  dropzone: {
    height: "200px",
    width: "200px",
    border: "2px dashed black",
    borderRadius: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",

  },
}

export default ConnectedProfile;