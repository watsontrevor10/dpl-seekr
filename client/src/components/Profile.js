import React, { Fragment, } from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email } } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div width={4}>
        </div>
        <div width={8}>
          <input
            label="Name"
            name="name"
            placeholder="Name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <br />
          <input
            label="Email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}

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
                      <center><p>Image Goes Here (MAX 10 MB)</p></center>
                  }
                </div>
              )
            }}
          </Dropzone>
          <button>Update</button>
        </div>
      </form>
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

  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <>
        <div width={4}>
          <img style={profilepic} src={user.image || defaultImage} />
        </div>
        <div width={8}>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
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

  render() {
    const { editing, } = this.state;
    return (
      <>
        <br />
        <div>
          {editing ? this.editView() : this.profileView()}
          <div>
            <button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</button>
          </div>
        </div>
      </>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    {auth =>
      <Profile {...props} auth={auth} />
    }
  </AuthConsumer>
)

const profilepic = {
  height: '300px',
  width: '300px',
  borderRadius: '150px'
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

export default ConnectedProfile;