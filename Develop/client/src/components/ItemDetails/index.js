import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useItemContext } from '../../utils/GlobalState';
import { QUERY_ITEM } from '../../utils/queries';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function ItemDetails() {
  const [state, dispatch] = useItemContext();
  const { singleItem } = state;
  console.log(singleItem)
  const {loading, data, error} = useQuery(QUERY_ITEM, { variables: { id: singleItem } });
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    if (data) {
      setItemDetails(data.item);
      console.log(data)
    } 
  }, [data, loading, itemDetails]);



  return (
    <div className="container display-container">
      <h1 className="text-center "> Item Information </h1>
      <div className="text-left border">
        <ul>
        
          <li id="name">Name: {itemDetails.name}</li>
          {/* <li id="description">Description: {itemDetails.description}</li>
          <li id="createdAt">Created At: {itemDetails.createdAt}</li>
          <li id="size">Size: {itemDetails.size}</li>
          <li id="weight">Weight: {itemDetails.weight}</li>
          <li id="section">Section: {itemDetails.section}</li> */}

        </ul>     
      </div>
    </div>
  )
}

export default ItemDetails;
