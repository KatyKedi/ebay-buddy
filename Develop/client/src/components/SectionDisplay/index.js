import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SECTIONS } from '../../utils/queries';
import { UPDATE_CURRENT_SECTION } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { DELETE_SECTION } from '../../utils/mutations';
import { Container, Row, Col, Button, Accordion, Form, Modal, CloseButton } from 'react-bootstrap'
import { SectionModal } from '../Modals/index'

function SectionDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { data } = useQuery(QUERY_SECTIONS);
  const [deleteSection] = useMutation(DELETE_SECTION)
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState({});
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [deletePrompt, setDeletePrompt] = useState(false)

  useEffect(() => {
    if (!sections.length && data) {
      setSections(data.sections)
    }
    dispatch({
      type: UPDATE_CURRENT_SECTION,
      section: selectedSection
    })
  }, [data, selectedSection, sections, dispatch]);

  const handleDeleteClick = async () => {
    await deleteSection({ variables: { id: selectedSection._id } })
    setSections(sections.filter((section) => section._id !== selectedSection._id))
    setSelectedSection({})
  }

  return (
    <>
      <Container className='my-4 h-100'>
        <Row>
          {(sections.length !== 0) ? (
            <Col>
              <h2 className='text-center'>All Sections</h2>
              <Accordion>
                {sections.map((section, index) => (
                  <Accordion.Item
                    id={section._id}
                    eventKey={index}
                    className='my-2 p-1 border border-warning rounded bg-gradient'>
                    <Accordion.Header onClick={() => setSelectedSection(section)}>{section.name}</Accordion.Header>
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
                              onClick={() => setModalDisplay(<SectionModal section={section} />)}
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
          ) : (
            <h2 className='text-center'>No Sections to Display</h2>
          )}
        </Row>
      </Container>
      {modalDisplay}
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
    </>
  )
}

export default SectionDisplay;