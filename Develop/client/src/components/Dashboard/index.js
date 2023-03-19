import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { ItemModal, SectionModal } from '../Modals/index'
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function Dashboard() {
  const navigate = useNavigate();

  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [modal, setModal] = useState('')

  useEffect(() => {
    if (modal === 'item') {
      setModalDisplay(<ItemModal modal={modal} setModal={setModal} selectedItem={ { _id: 0 } } setSelectedItem={undefined}/>)
    } else if (modal === 'section') {
      setModalDisplay(<SectionModal modal={modal} setModal={setModal} selectedSection={ { _id: 0 } }/>)
    } else {
      setModalDisplay(<></>)
    }
  }, [modal]);

  return (
    <Container fluid className='m-0 p-0 text-center h-100'>
      <Row className="m-4">
        <Col className='d-flex flex-column mt-2'>
          <h2>Items</h2>
          <Button
            className='mb-3'
            variant="outline-primary"
            onClick={() => {
              navigate('/item-display')
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
        <Col className='d-flex flex-column mt-2'>
          <h2>Sections</h2>
          <Button
            className='mb-3'
            variant="outline-primary"
            onClick={() => {
              navigate('/section-display')
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
    </Container>
  );
}
export default Dashboard;