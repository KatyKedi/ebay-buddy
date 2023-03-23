import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { QUERY_SECTIONS } from '../../utils/queries';
import { DELETE_SECTION } from '../../utils/mutations';

import { SectionModal } from '../Modals/index'

import { Container, Row, Col, Button, Accordion, Form, Modal, CloseButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function SectionDisplay({ modal, setModal, selectedSection, setSelectedSection }) {
  const { data, refetch } = useQuery(QUERY_SECTIONS, { fetchPolicy: "no-cache" });
  const [deleteSection] = useMutation(DELETE_SECTION)

  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [deletePrompt, setDeletePrompt] = useState(false)
  const [sectionIndex, setSectionIndex] = useState(null)

  const handleDeleteClick = async () => {
    await deleteSection({ variables: { id: selectedSection._id } })
    setSections(sections.filter((section) => section._id !== selectedSection._id))
    setSelectedSection({})
  }

  useEffect(() => {
    if (!sections.length && data) {
      setSections(data.sections)
    }
  }, [data]);

  useEffect(() => {
    modal && setModalDisplay(
    <SectionModal 
      modal={modal} 
      setModal={setModal} 
      selectedSection={selectedSection} 
      setSelectedSection={setSelectedSection}
      refetch={refetch}/>)
  }, [modal])

  if (!data && sections.length === 0) return <p>Loading...</p>
  if (data && sections.length === 0) return <p>No section data to display</p>

  return (
    <>
      <Container className='my-4 h-100'>
        <Row>
          <Col>
            <h2 className='text-center'>All Sections</h2>
            <Accordion activeKey={sectionIndex}>
              {sections.map((section, index) => (
                <Accordion.Item
                  key={section._id}
                  eventKey={index}
                  className='list-item'>
                  <Accordion.Header onClick={() => {
                    if (sectionIndex !== index) {
                      setSectionIndex(index)
                      setSelectedSection(section)
                    } else {
                      setSectionIndex(null);
                      setSelectedSection(null)
                    }
                  }}>{section.name} {section.full && <span>(full)</span>}</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row className='justify-content-between gy-2'>
                        <Col sm={12} md={4} >
                          <Button
                            className='w-100 h-100'
                            variant="outline-warning"
                            onClick={() => navigate('/item-display')}
                          >View Items</Button>
                        </Col>
                        <Col sm={6} md={4}>
                          <Button
                            className='w-100 h-100'
                            variant="outline-primary"
                            onClick={() => setModal(true)}
                          >Edit</Button>
                        </Col>
                        <Col sm={6} md={4}>
                          <Button
                            className='w-100 h-100'
                            variant="outline-danger"
                            onClick={() => setDeletePrompt(true)}
                          >Delete</Button>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
      {modal && modalDisplay}
      {selectedSection && (
      <Modal
        show={deletePrompt}
        contentLabel="Delete Section">
        <Modal.Header>
          <Modal.Title className='text-primary'>Are you sure you would like to delete this section: </Modal.Title>
          <CloseButton onClick={() => {
            setDeletePrompt(false)
          }} />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleDeleteClick}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{selectedSection.name}</Form.Label>
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
      )}
    </>
  )
}

export default SectionDisplay;