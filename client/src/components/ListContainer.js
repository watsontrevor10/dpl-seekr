import React from "react";
import List from "./List"; 
import HomeNav from "./HomeNav"; 

const ListContainer = () => {
  return(
    <>
    <div className="main-listContainer">
      <HomeNav />
      <List name="Wishlist" className="list-component-container"/>
      <List name="Applied" className="list-component-container"/>
      <List name="Interviewed" className="list-component-container" />
      <List name="Offer" className="list-component-container"/>
      <List name="Rejected" className="list-component-container"/>
    </div>
    </>
  )
}

export default ListContainer; 