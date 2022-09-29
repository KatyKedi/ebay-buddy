import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { useGlobalContext } from '../../utils/GlobalState';
import { QUERY_ITEM } from '../../utils/queries';
import { Container } from 'react-bootstrap'

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
    <Container className='my-3'>
      <h2 > Item Information </h2>
      <div className="border border-warning rounded">
        <ul className='p-2 list-unstyled'>
        
          <li id="name" className="text-left">Name: {itemDetails.name}</li>
          {itemDetails.description ? (<li id="description" className="text-left">Description: {itemDetails.description}</li> ) : false }
          <li id="createdAt" className="text-left">Created At: {itemDetails.createdAt}</li>
          <li id="size" className="text-left">Size: {itemDetails.size ? itemDetails.size : 'Not Applicable'}</li>
          <li id="weight" className="text-left">Weight: {itemDetails.weight ? itemDetails.weight : 'Not Applicable'}</li>
          <li id="section" className="text-left">Section: {itemDetails.section}</li>

        </ul>     
      </div>
    </Container>
  )
}

export default ItemDetails;