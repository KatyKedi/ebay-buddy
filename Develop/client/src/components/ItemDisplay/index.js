import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { UPDATE_CURRENT_ITEM, UPDATE_ITEMS, UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DELETE_ITEM } from '../../utils/mutations';
import { Container, Row, Col, Button, Accordion, Form, Modal, CloseButton } from 'react-bootstrap'
import { ItemModal } from '../Modals/index'
import ItemDetails from '../ItemDetails/index'

function ItemDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { keyword, section } = state;
  const { loading, data } = useQuery(QUERY_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM)

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [deletePrompt, setDeletePrompt] = useState(false)
  const [modalType, setModal] = useState('')

  useEffect(() => {
    dispatch({
      type: UPDATE_CURRENT_MODAL,
      modal: modalType
    })
    if (data) {
      dispatch({
        type: UPDATE_ITEMS,
        items: filteredItems,
      });
      filteredItems.forEach((item) => {
        idbPromise('items', 'put', item);
      });
      (section) ?
        setFilteredItems(data.items.filter(item => item.section === section.name)) :
        setFilteredItems(data.items.filter(item => item.name.includes(keyword)));
      if (keyword) {
        (filteredItems === data.items) && setFilteredItems([])
      }
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

  }, [data, deleteItem, modalType, dispatch, filteredItems, loading, selectedItem, keyword, section]);

  const handleEditClick = () => {
    setModal('item')
    setModalDisplay(<ItemModal item={selectedItem} />)
  }

  const handleDeleteClick = async () => {
    await deleteItem({ variables: { id: selectedItem._id } })
    setFilteredItems(filteredItems.filter((item) => item._id !== selectedItem._id))
    setSelectedItem({})
  }

  return (
    <>
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
                              onClick={setDeletePrompt(true)}
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


      </Container>
      {modalDisplay}
      <Modal
        show={deletePrompt}
        contentLabel="Delete Section">
        <Modal.Header>
          <Modal.Title className='text-primary'>Are you sure you would like to delete this item: </Modal.Title>
          <CloseButton onClick={() => {
            setDeletePrompt(false)
          }} />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleDeleteClick}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{selectedItem.name}</Form.Label>
            </Form.Group>
            <Button
              variant='outline-success'
              type='submit'
            >Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='outline-danger'
            onClick={() => {
              setDeletePrompt(false)
            }}
          >Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ItemDisplay;