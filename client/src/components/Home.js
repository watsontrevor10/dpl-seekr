import React from 'react';
import ListContainer from "./ListContainer"; 
import Jobs from "./Jobs";
import Sidebar from "./Sidebar"; 


const Home = () => (
  <>
  <div className="main-home-container">
    <div className="main-sidebar-container">
      <Sidebar />
    </div>
    <div className="main-listContainer">
      <ListContainer />
    </div>
    {/* <div>
      <Jobs />
    </div> */}
     </div>
  </>
)

export default Home;
