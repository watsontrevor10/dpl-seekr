import React from "react";
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
            <Link
              to="/">
              <div>
                <img
                  style={icon}
                  src={user.image || defaultImage}
                />
              </div>
            </Link>
          </div>
          {user.name}

          <Link to='/board'>
            {/* <img src={board} /> */}
            <svg className="board-white" alt="Board logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.998 415.998">
            <g>
              <g>
                <rect x="111.999" y="176" width="192" height="16"/>
              </g>
            </g>
            <g>
              <g>
                <rect x="111.999" y="224" width="192" height="16"/>
              </g>
            </g>
            <g>
              <g>
                <rect x="111.999" y="272" width="192" height="16"/>
              </g>
            </g>
            <g>
              <g>
                <rect x="111.999" y="320" width="96" height="16"/>
              </g>
            </g>
            <g>
              <g>
                <circle cx="208.239" cy="48" r="12"/>
              </g>
            </g>
	        <g>
            <path d="M367.998,95.999c0-17.673-14.326-32-31.999-32h-44.424c-5.926-6.583-13.538-11.62-22.284-14.136
			c-7.367-2.118-13.037-7.788-15.156-15.155C248.37,14.664,229.897,0,207.998,0c-21.898,0-40.37,14.663-46.134,34.706
			c-2.122,7.376-7.806,13.039-15.182,15.165c-8.736,2.518-16.341,7.55-22.262,14.128H79.999c-17.674,0-32,14.327-32,32v287.999
			c0,17.673,14.326,32,32,32c73.466,0,163.758,0,256,0c17.674,0,32-14.327,32-32C367.999,293.119,367.998,206.096,367.998,95.999z
			 M128,95.741c0.11-14.066,9.614-26.606,23.113-30.496c12.71-3.662,22.477-13.426,26.127-26.116
			C181.157,25.51,193.805,16,207.998,16c14.194,0,26.842,9.51,30.758,23.13c3.652,12.698,13.413,22.459,26.111,26.11
			c13.618,3.917,23.13,16.566,23.13,30.758v16H128V95.741z M335.999,399.998c-85.455,0-170.77,0-256,0c-8.823,0-16-7.178-16-16
			V95.999c0-8.822,7.177-16,16-16h34.742c-1.73,4.892-2.698,10.143-2.74,15.617v32.383h191.998v-32c0-5.615-0.992-10.991-2.764-16
			h34.764c8.822,0,15.999,7.178,15.999,16c0,45.743-0.001,260.254,0.002,287.999C351.999,392.82,344.822,399.998,335.999,399.998z"
			/>
      </g>

      </svg>
          </Link>
        </div>
        <div className="logout">
          {/* <img
            className="logout-icon"
            src={logout}
            onClick={() => handleLogout(props.history)}
          >
          </img> */}
          <svg 
          className="logout-icon"
          src={logout}
          onClick={() => handleLogout(props.history)}

        viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" >
            <path id="path892" d="m23.515625 9.515625a1.50015 1.50015 0 0 0 -.54296875.1015625c-10.196538 3.7749376-16.972656 13.509931-16.972656 24.382812 0 14.341637 11.658363 26 26 26s26-11.658363 26-26c0-10.871262-6.7743738-20.604746-16.96875-24.380859a1.50015 1.50015 0 1 0 -1.0429688 2.8125c9.027007 3.3437064 15.011719 11.941977 15.011719 21.568359 0 12.720316-10.279684 23-23 23s-23-10.279684-23-23c0-9.627821 5.9866985-18.225692 15.015625-21.568359a1.50015 1.50015 0 0 0 -.5-2.9160156z" />

            <path id="rect821" d="m32 4c-2.7440542 0-5 2.2559458-5 5v16c0 2.7440542 2.2559458 5 5 5s5-2.2559458 5-5v-16c0-2.7440542-2.2559458-5-5-5zm0 3c1.1339458 0 2 .86605415 2 2v16c0 1.1339458-.86605415 2-2 2s-2-.86605415-2-2v-16c0-1.1339458.86605415-2 2-2z" />
            </svg>
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

// const color = {
//   color: 'rgb(89, 81, 117)'
// }
export default withRouter(ConnectedProfileSidebar); 