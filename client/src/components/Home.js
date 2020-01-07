import React from 'react';
import ListContainer from "./ListContainer"; 
import Jobs from "./Jobs";
import Sidebar from "./Sidebar"; 


const Home = () => (
  <>
  <div className="main-home-container">
    <div>
      <Sidebar />
    </div>
    <div>
      <ListContainer />
    </div>
    {/* <div>
      <Jobs />
    </div> */}
     </div>
  </>
)

export default Home;
