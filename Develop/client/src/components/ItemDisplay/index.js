import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { UPDATE_CURRENT_ITEM, UPDATE_ITEMS, UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DELETE_ITEM } from '../../utils/mutations';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { ItemModal, SectionModal } from '../Modals/index'
import ItemDetails from '../ItemDetails/index'

function ItemDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { keyword, section } = state;
  const { loading, data } = useQuery(QUERY_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM)

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [modalType, setModal] = useState('')

  const filterItems = (data) => {
    (section) ?
      setFilteredItems(data.items.filter(item => item.section === section)) :
      setFilteredItems(data.items.filter(item => item.name.includes(keyword)));
    if (keyword) {
      (filteredItems === data.items) && setFilteredItems([])
    } 
  }

  useEffect(() => {
    dispatch({
      type: UPDATE_CURRENT_MODAL,
      modal: modalType
    })
    if (data) {
      filterItems(data)
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
    console.log(filteredItems)
    console.log(keyword)
  }, [data, deleteItem, modalType, selectedItem]);

  const handleEditClick = () => {
    setModal('item')
    setModalDisplay(<ItemModal item={selectedItem} />)
  }

  const handleDeleteClick = async () => {
    const itemName = filteredItems.find(item => item._id === selectedItem._id).name;
    const confirm = window.confirm(
      `Are you sure you'd like to delete:
      ${itemName}?`)
    if (confirm) {
      await deleteItem({ variables: { id: selectedItem._id } })

      window.location.reload()
    }
  }


  console.log(filteredItems)
  return (
    <Container fluid className='my-4 h-100'>
      <Row>
        {(filteredItems.length !== 0) ? (
          <Col>
            {keyword ? (<h2 className='text-center'>Items matching <em className='text-warning'>{keyword}</em></h2>) : (<h2 className='text-center'>All Items</h2>)}
            <Accordion>
              {filteredItems.map((item, index) => (
                <Accordion.Item
                  className="list-item"
                  eventKey={index}
                >
                  <Accordion.Header onClick={() => setSelectedItem(item)}>{item.name}</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <ItemDetails item={item} />
                      </Row>
                      <Row className='justify-content-between'>
                        <Col>
                          <Button
                            variant="outline-primary"
                            onClick={handleEditClick}
                          >Edit</Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-danger"
                            onClick={handleDeleteClick}
                          >Delete</Button>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>))}
            </Accordion>
          </Col>
        ) : (
          <Col><h2 className='text-center'>No items to display for <em className='text-warning'>{keyword}</em></h2></Col>
        )}
      </Row>
      {modalDisplay}
    </Container>
  )
}

export default ItemDisplay;