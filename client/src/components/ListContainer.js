import React from "react";
import List from "./List"; 

const ListContainer = () => {
  return(
    <>
      <List name="Wishlist" />
      <List name="Applied"/>
      <List name="Interviewed" />
      <List name="Offer"/>
      <List name="Rejected"/>
    </>
  )
}

export default ListContainer; 