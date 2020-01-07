import React from "react";
import List from "./List"; 
import HomeNav from "./HomeNav"; 

const ListContainer = () => {
  return(
    <>
      <div className="main-homeNav-container">
        <HomeNav/>
        <div className="list-container">
          <div>
            <List name="Wishlist" />
          </div>
          <div> 
            <List name="Applied" className="list-component-container"/>
          </div>
          <div>
           <List name="Interviewed" className="list-component-container" />
          </div>
          <div>
            <List name="Offer" className="list-component-container"/>
          </div>
          <div>
            <List name="Rejected" className="list-component-container"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListContainer; 