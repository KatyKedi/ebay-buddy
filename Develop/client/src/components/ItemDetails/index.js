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

  // useEffect(() => {
  //   if (data) {
  //     setItemDetails(data.item);
  //     dispatch({
  //       type: UPDATE_CURRENT_ITEM,
  //       singleItem: itemDetails
  //     })
  //   }
  // }, [data]);

  if (data && data.item) {
    return (
      <Container fluid className='mb-3'>
        <Table hover bordered size="sm" className='p-2 border border-warning rounded'>
          <tbody>
            <tr id="section">
              <td>Section</td>
              <td>{data.item.section}</td>
            </tr>
            <tr id="size">
              <td>Size</td>
              <td>{data.item.size ? data.item.size : 'Not Applicable'}</td>
            </tr>
            <tr id="weight">
              <td>Weight</td>
              <td>{data.item.weight ? data.item.weight : 'Not Applicable'}</td>
            </tr>
            {data.item.description && (<tr id="description">
              <td>Description</td>
              <td>{data.item.description}</td>
            </tr>)}
            <tr id="createdAt">
              <td>Created On</td>
              <td>{dayjs(new Date(parseInt(data.item.createdAt)).toLocaleDateString("en-US")).format("MM-DD-YYYY")}</td>
            </tr>
          </tbody>
        </Table>
{/*   
        <ul className='p-2 border border-warning rounded'>
          <li id="section">Section: {data.item.section}</li>
          <li id="size">Size: {data.item.size ? data.item.size : 'Not Applicable'}</li>
          <li id="weight">Weight: {data.item.weight ? data.item.weight : 'Not Applicable'}</li>
          {data.item.description && (<li id="description">Description: {data.item.description}</li>)}
          <li id="createdAt">Created On: {dayjs(new Date(parseInt(data.item.createdAt)).toLocaleDateString("en-US")).format("MM-DD-YYYY")}</li>

        </ul> */}
      </Container>
    )
  }
}

export default ItemDetails;