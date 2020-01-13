import React, {useState} from 'react';
import { Link, withRouter, } from 'react-router-dom'
import ListContainer from './ListContainer';

const Dashboard = (props) => {

  // const [ openBoard, setOpenBoard ] = useState(false)

  // const showBoard = () => {
  //   setOpenBoard(!openBoard)
  // }

  // return(
  //   <>
  //     <div className="main-dashboard-container">
  //       { openBoard ?
  //         null
  //         :
  //         <button onClick={showBoard} className="board-btn">Board</button>
  //       }
  //       { openBoard ? 
  //         <ListContainer home={openBoard} /> 
  //         : 
  //         null 
  //       }
  //     </div>
  //   </>
  // )

  return (
    <>
      <Link to='dashboard'>Board</Link>
    </>
  )
}

export default Dashboard;