import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import Dropzone from 'react-dropzone'
import ProfileSidebar from "./ProfileSidebar"
import MobileMenu from "./MobileMenu"



const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class Profile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', }, };

  onDrop = (files) => {
    let data = files.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))
    this.setState({
      formValues: {
        ...this.state.formValues,
        file: files[0],
        file_thumbnail: data
      },
      isDragActive: true
    });
  }

  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <>
        <div className="new-profile profile-sidebar">
          <div className="main-sidebar-container sidebar-radius">
            <ProfileSidebar />
          </div>
          <div className="profile">
            <div className="mobile-menu-container">
              <MobileMenu />
            </div>
            <div>
              <img style={profilepic} src={user.image || defaultImage} />
            </div>
            <div>
              <center>
                <h1>{user.name}</h1>
                <br />
                <h4>{user.email}</h4>
                <button className="jobinfo-save-btn fill2" onClick={this.toggleEdit}>Edit</button>
              </center>
            </div>
          </div>
        </div>
      </>
    )
  }

  showPreview = () => {
    return (
      <img
        alt='thumbnail'
        style={{ width: '100%', borderRadius: '150px', height: '100%' }}
        src={this.state.formValues.file_thumbnail[0].preview}></img>
    )
  }

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email } } = this.state;
    return (
      <>
        <div className="new-profile profile-sidebar">
          <div className="main-sidebar-container sidebar-radius">
            <ProfileSidebar />
          </div>
          <div className="profileedit">
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
                        {({ getRootProps, getInputProps, }) => {
                          return (
                            <div
                              {...getRootProps()}
                              style={zone.dropzone}
                            >
                              <input {...getInputProps()} />
                              {
                                this.state.isDragActive ?
                                  (
                                    this.showPreview()
                                  ) : (
                                    <center><p>Upload Image</p></center>
                                  )
                              }
                            </div>
                          )
                        }}
                      </Dropzone>
                    </div>
                  </div>
                  <div className="edit">
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
                  <div className="edit">
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
                  <center>
                    <div>
                      <button className="jobinfo-save-btn task-save fill2">Save</button>
                      <button className="jobinfo-save-btn task-save fill2" onClick={this.toggleEdit}>Cancel</button>
                    </div>
                  </center>
                </div>
              </form>
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
        <div className="profile-container">
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

const drop = {
  margin: '2.5rem',
}

const zone = {
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