import React from "react";
import List from "./List"; 
import HomeNav from "./HomeNav"; 

const ListContainer = () => {
  return(
    <>
      <div className="main-homeNav-container">
        <HomeNav/>
        <div className="list-container">
          <List name="Wishlist" />
          <List name="Applied" className="list-component-container"/>
          <List name="Interviewed" className="list-component-container" />
          <List name="Offer" className="list-component-container"/>
          <List name="Rejected" className="list-component-container"/>
        </div>
      </div>
    </>
  )
}

export default ListContainer; 