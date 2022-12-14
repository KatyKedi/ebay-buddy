import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { UPDATE_CURRENT_ITEM, UPDATE_ITEMS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { DELETE_ITEM } from '../../utils/mutations';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { ItemModal } from '../Modals/index'
import ItemDetails from '../ItemDetails/index'

function ItemDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { keyword, modal } = state;
  const { loading, data } = useQuery(QUERY_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM)

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [modalDisplay, setModalDisplay] = useState(<></>)

  useEffect(() => {
    if (data) {
      setFilteredItems(data.items.filter(item => item.name.includes(keyword)));
      dispatch({
        type: UPDATE_ITEMS,
        items: filteredItems,
      });
      filteredItems.forEach((item) => {
        idbPromise('items', 'put', item);
      });
    } else if (!loading) {
      idbPromise('items', 'get').then((items) => {
        dispatch({
          type: UPDATE_ITEMS,
          items: items,
        });
      });
    }
    dispatch({
      type: UPDATE_CURRENT_ITEM,
      singleItem: selectedItem
    })
  }, [loading, data, deleteItem]);

  const handleEditClick = () => {
    setModalDisplay(<ItemModal />)
  }

  const handleDeleteClick = () => {
    if (selectedItem) {
      const itemName = filteredItems.find(item => item._id === selectedItem).name;
      const confirm = window.confirm(
        `Are you sure you'd like to delete:
        ${itemName}?`)
      if (confirm) {
        deleteItem({ variables: { id: selectedItem } })
      }
    } else {
      window.alert("No item selected.")
    }
  }

  if (filteredItems) {
    return (
      <>
        <Container className='my-4 h-100'>
          <Row>
            <Col>
              {keyword ? (<h2 className='text-center'>Items matching <span>{keyword}</span></h2>) : (<h2 className='text-center'>All Items</h2>)}
              <Accordion>
                {filteredItems.map((item, index) => (
                  <Accordion.Item
                    className="list-item"
                    eventKey={index}
                  >
                    <Accordion.Header onClick={() => setSelectedItem(item._id)}>{item.name}</Accordion.Header>
                    <Accordion.Body>
                      <ItemDetails item={item} />
                      <Button
                        variant="outline-primary"
                        onClick={handleEditClick}
                      >Edit</Button>
                      <Button
                        variant="outline-danger"
                        onClick={handleDeleteClick}
                      >Delete</Button>
                    </Accordion.Body>
                  </Accordion.Item>))}
              </Accordion>
            </Col>
          </Row>
          {modalDisplay}
        </Container>
      </>
    )
  }
  else {
    return (
      <h2>No items to display for "{keyword}"</h2>
    )
  }
}

export default ItemDisplay;