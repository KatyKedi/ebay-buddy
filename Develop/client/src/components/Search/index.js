import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_KEYWORD, UPDATE_CURRENT_MODAL } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';
import { ItemModal, SectionModal } from '../Modals/index'
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";



function Search() {
  const [state, dispatch] = useGlobalContext();

  const navigate = useNavigate();

  const [itemName, setItemName] = useState('');

  useEffect(() => {
    dispatch({
      type: UPDATE_CURRENT_KEYWORD,
      keyword: itemName
    });
  }, [itemName]);

  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [modalType, setModal] = useState('')

  useEffect(() => {
    selectModal()
    dispatch({
      type: UPDATE_CURRENT_MODAL,
      modal: modalType
    })
  }, [modalType, dispatch]);

  const selectModal = () => {
    const { modal } = state
    if (modal === 'item') {
      setModalDisplay(<ItemModal />)
    }
    else if (modal === 'section') {
      setModalDisplay(<SectionModal />)
    } else {
      setModal("")
      setModalDisplay(<></>)
    }
  }
  return (
    <Container className='m-0 p-0 text-center h-100'>
      <Row className='m-4'>
        <Col className='mt-2'>
          <Form>
            <h2>Search By Name</h2>
            <Form.Group className='mt-3'>
              <Form.Control
                type='text'
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
              />
            </Form.Group>
          </Form>
          <Button
            className='mt-2'
            variant='outline-primary'
            type='submit'
            onClick={() => {
              navigate('/item-display', { replace: true });
            }}
          >View Items</Button>
        </Col>
      </Row>
      <Row className="m-4">
        <h2>Items</h2>
        <Col className='mt-2'>

          <Button
            className='mb-3'
            variant="outline-primary"
            onClick={() => {
              setItemName('')
              navigate('/item-display', { replace: true })
            }}
          >View All Items
          </Button>
          <Button
            className='mb-3'
            variant='outline-success'
            onClick={() => {
              setModal('item')
            }}
          >Add Item
          </Button>
        </Col>
      </Row>
      <Row className="m-4">
        <h2>Sections</h2>
        <Col className='mt-2 mb-4'>
          <Button
            className='mb-3'
            variant="outline-primary"
            onClick={() => {
              navigate('/section-display', { replace: true })
            }}
          >View All Sections
          </Button>
          <Button
            className='mb-3'
            variant="outline-success"
            onClick={() => {
              setModal('section')
            }}>
            Add Section
          </Button>
        </Col>
      </Row>
      {modalDisplay}
    </Container >
  );
}
export default Search;