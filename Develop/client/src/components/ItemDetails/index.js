import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';
import { Container } from 'react-bootstrap'

import './style.css'

function ItemDetails({ item }) {
  const { data } = useQuery(QUERY_ITEM, { variables: { id: item._id } });
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    if (data) {
      setItemDetails(data.item);
    }
  }, [data]);

  return (
    <Container className='mb-3'>
      <ul className='p-2 list-unstyled border border-warning rounded'>

        {itemDetails.description && (<li id="description" >Description: {itemDetails.description}</li>)}
        <li id="createdAt">Created At: {itemDetails.createdAt}</li>
        <li id="size">Size: {itemDetails.size ? itemDetails.size : 'Not Applicable'}</li>
        <li id="weight">Weight: {itemDetails.weight ? itemDetails.weight : 'Not Applicable'}</li>
        <li id="section">Section: {itemDetails.section}</li>

      </ul>
    </Container>
  )
}

export default ItemDetails;