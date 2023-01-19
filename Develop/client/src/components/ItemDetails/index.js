import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';
import { UPDATE_CURRENT_ITEM } from '../../utils/actions';
import { Container, Table } from 'react-bootstrap'
import dayjs from 'dayjs';
import { useGlobalContext } from '../../utils/GlobalState';

function ItemDetails({ item }) {
  const [state, dispatch] = useGlobalContext()
  const { data } = useQuery(QUERY_ITEM, { variables: { id: item._id } });
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    if (data) {
      setItemDetails(data.item);
      dispatch({
        type: UPDATE_CURRENT_ITEM,
        singleItem: itemDetails
      })
    }
  }, [data]);

  if (itemDetails) {
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
{/*   
        <ul className='p-2 border border-warning rounded'>
          <li id="section">Section: {itemDetails.section}</li>
          <li id="size">Size: {itemDetails.size ? itemDetails.size : 'Not Applicable'}</li>
          <li id="weight">Weight: {itemDetails.weight ? itemDetails.weight : 'Not Applicable'}</li>
          {itemDetails.description && (<li id="description">Description: {itemDetails.description}</li>)}
          <li id="createdAt">Created On: {dayjs(new Date(parseInt(itemDetails.createdAt)).toLocaleDateString("en-US")).format("MM-DD-YYYY")}</li>

        </ul> */}
      </Container>
    )
  }
}

export default ItemDetails;