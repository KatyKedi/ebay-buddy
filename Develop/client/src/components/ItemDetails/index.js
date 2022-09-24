import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useGlobalContext } from '../../utils/GlobalState';
import { QUERY_ITEM } from '../../utils/queries';

import './style.css'

function ItemDetails() {
  const [state, dispatch] = useGlobalContext();
  const { singleItem } = state;

  const { loading, data } = useQuery(QUERY_ITEM, { variables: { id: singleItem } });

  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    if (data) {
      setItemDetails(data.item);
    } 
  }, [data, loading, itemDetails]);




  return (
    <div className="container display-container">
      <h1 className="text-left "> Item Information </h1>
      <div className="border">
        <ul>
        
          <li id="name" className="text-left">Name: {itemDetails.name}</li>
          <li id="description" className="text-left">Description: {itemDetails.description ? itemDetails.description : 'Not Applicable'}</li>
          <li id="createdAt" className="text-left">Created At: {itemDetails.createdAt}</li>
          <li id="size" className="text-left">Size: {itemDetails.size ? itemDetails.size : 'Not Applicable'}</li>
          <li id="weight" className="text-left">Weight: {itemDetails.weight ? itemDetails.weight : 'Not Applicable'}</li>
          <li id="section" className="text-left">Section: {itemDetails.section}</li>

        </ul>     
      </div>
    </div>
  )
}

export default ItemDetails;