import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'

import { QUERY_ITEM } from '../../utils/queries';

import dayjs from 'dayjs';

import { Container, Table } from 'react-bootstrap'


function ItemDetails({ selectedId, setSelectedItem }) {
  const { data } = useQuery(QUERY_ITEM, { variables: { id: selectedId } });

  useEffect(() => {
    if (data) {
      setSelectedItem(data.item);
    }
  }, [data]);

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
      </Container>
    )
  }
}

export default ItemDetails;