import React from "react";
import List from "./List"; 
import HomeNav from "./HomeNav"; 

const ListContainer = () => {
  return(
    <>
      <div className="main-homeNav-container">
        <HomeNav/>
        <div className="list-container">
          <div className="list">
            <List name="Wishlist" />
          </div>
          <div className="list"> 
            <List name="Applied" className="list-component-container"/>
          </div>
          <div className="list">
           <List name="Interviewed" className="list-component-container" />
          </div>
          <div className="list">
            <List name="Offer" className="list-component-container"/>
          </div>
          <div className="list">
            <List name="Rejected" className="list-component-container"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListContainer; 