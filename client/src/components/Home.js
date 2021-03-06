import React from 'react';
import ListContainer from "./ListContainer";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu"
import Dashboard from './Dashboard';


const Home = () => (
  <>
    <div className="main-home-container">
      <div className="main-sidebar-container">
        <Sidebar />
      </div>
      <div className="mobile-menu-container">
        <MobileMenu />
      </div>
      <div className="main-listContainer">
        <Dashboard />
      </div>
    </div>
  </>
)

export default Home;
