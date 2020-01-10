import React from "react";
import List from "./List"; 
import HomeNav from "./HomeNav"; 

const ListContainer = () => {
  return(
    <>
      <div className="main-homeNav-container">
        <HomeNav/>
        </div>
        <div className="list-container">
          <div className="list">
            <List name="Wishlist" className="list-component-container" key={1}/>
          </div>
          <div className="list"> 
            <List name="Applied" className="list-component-container" key={2}/>
          </div>
          <div className="list">
           <List name="Interviewed" className="list-component-container"key={3} />
          </div>
          <div className="list">
            <List name="Offer" className="list-component-container" key={4}/>
          </div>
          <div className="list">
            <List name="Rejected" className="list-component-container" key={5}/>
          </div>
        </div>
      
    </>
  )
}

export default ListContainer; 