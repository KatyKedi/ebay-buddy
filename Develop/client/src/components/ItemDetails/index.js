import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'

import { QUERY_ITEM } from '../../utils/queries';

import dayjs from 'dayjs';

import { Container, Table } from 'react-bootstrap'


function ItemDetails({ id }) {
  const { data }= useQuery(QUERY_ITEM, { variables: { id } });
  const [itemDetails, setItemDetails] = useState({})

  useEffect(() => {
    if (data) {
      setItemDetails(data.item)
    }
  }, [data]);

  if (!data && !itemDetails._id) return (<h1>Loading...</h1>)
    return (
      <Container fluid className='mb-3'>
        <Table hover bordered size="sm" className='p-2 border border-warning rounded'>
          <tbody>
            <tr id="section">
              <td>Section</td>
              <td>{itemDetails.section}</td>
            </tr>
            <tr id="size">
              <td>Size</td>
              <td>{itemDetails.size ? itemDetails.size : 'Not Applicable'}</td>
            </tr>
            <tr id="weight">
              <td>Weight</td>
              <td>{itemDetails.weight ? itemDetails.weight : 'Not Applicable'}</td>
            </tr>
            {itemDetails.description && (<tr id="description">
              <td>Description</td>
              <td>{itemDetails.description}</td>
            </tr>)}
            <tr id="createdAt">
              <td>Created On</td>
              <td>{dayjs(new Date(parseInt(itemDetails.createdAt)).toLocaleDateString("en-US")).format("MM-DD-YYYY")}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    )
  }

export default ItemDetails;