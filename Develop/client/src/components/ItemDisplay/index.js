import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { QUERY_ITEMS, QUERY_SECTIONS } from '../../utils/queries';
import { DELETE_ITEM } from '../../utils/mutations';
import paginate from '../../utils/paginate';

import { ItemModal } from '../Modals/index'
import ItemDetails from '../ItemDetails/index'

import { Container, Row, Col, ButtonToolbar, ButtonGroup, Button, Accordion, Form, Modal, CloseButton, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDisplay({ modal, setModal, selectedSection, setSelectedSection }) {
  const itemsData = useQuery(QUERY_ITEMS)
  const sectionsData = useQuery(QUERY_SECTIONS)
  const [deleteItem] = useMutation(DELETE_ITEM)

  const [selectedItem, setSelectedItem] = useState({})
  const [selectedId, setSelectedId] = useState('')
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [deletePrompt, setDeletePrompt] = useState(false)
  const [itemIndex, setItemIndex] = useState(null)
  const [sections, setSections] = useState([])
  const [sectionFilter, setSectionFilter] = useState({})
  const [filter, setFilter] = useState("")
  const [displayData, setDisplayData] = useState([])
  const [originalData, setOriginalData] = useState([])

  const [settings, setSettings] = useState({
    totalItems: 100,
    currentPage: 0,
    pageSize: 20,
    maxPages: 20
  })

  const [pagination, setPagination] = useState({})

  const paginateData = (page, dataset) => {
    const pageObj = paginate({ ...settings, currentPage: page, totalItems: dataset.length })
    setPagination(pageObj)
    setDisplayData(dataset.slice(pageObj.startIndex, pageObj.endIndex + 1))
  }

  const handleEditClick = () => {
    setModal('item')
    setModalDisplay(<ItemModal modal={true} setModal={setModal} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />)
  }

  const handleDeleteClick = async (e) => {
    e.preventDefault()
    await deleteItem({ variables: { id: selectedItem._id } })
    setOriginalData(originalData.filter((item) => item._id !== selectedId))
    setItemIndex(null);
    setSelectedId(null)
    setDeletePrompt(false)
  }

  useEffect(() => {
    if (filter.length > 2) {
      let foundItems = []
      originalData.forEach(item => {
        if (item.name.toLowerCase().includes(filter.toLowerCase()) || (item.description && item.description.toLowerCase().includes(filter.toLowerCase()))) {
          foundItems.push(item)
        }
      })
      paginateData(1, foundItems)
    } else {
      paginateData(settings.currentPage, originalData)
    }
  }, [filter])

  useEffect(() => {
    if (originalData && originalData.length) {
      paginateData(settings.currentPage + 1, originalData)
    }
  }, [settings, originalData])

  useEffect(() => {
    if (!itemsData.loading && originalData.length === 0) {
      setSettings({ ...settings, totalItems: itemsData.data.items.length })
      setOriginalData(itemsData.data.items)
    }
  }, [itemsData.data]);

  useEffect(() => {
    if (!sectionsData.loading && sections.length === 0) {
      setSections(sectionsData.data.sections)
    }
  }, [sectionsData.data]);

  if (!displayData.length && originalData.length === 0) return <p>Loading...</p>
  if (!sections.length) return <p>Loading...</p>
  if (itemsData.data && originalData.length === 0) return <p>No item data to display</p>

  return (
    <>
      <Container fluid className='my-4 h-100'>
        <Row className='m-4'>
          <Form className='p-0 text-center'>
            <Form.Group className='p-0 mt-3'>
              <Container>
                <Row>
                  <Card>
                    <Card.Body>
                      <Card.Title>Search By Name</Card.Title>
                      <Form.Control
                      type='text'
                      name="filter"
                      value={filter}
                      onChange={((e) => setFilter(e.target.value))}
                    />
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>Search By Section</Card.Title>
                      <Form.Select onChange={((e) => setSectionFilter(e.target.value))}>
                        {sections.length !== 0 && sections.map((section) => (
                          <option value={section}id={section._id}>{section.name}</option>
                        ))}
                      </Form.Select>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            </Form.Group>
          </Form>
        </Row>
        {displayData.length !== 0 ? (
          <Row className='m-4'>
            <Accordion activeKey={itemIndex}>
              {displayData.map((item, index) => (
                <Accordion.Item
                  key={item._id}
                  className="list-item"
                  eventKey={index}>
                  <Accordion.Header onClick={() => {
                    if (itemIndex !== index) {
                      setItemIndex(index)
                      setSelectedId(item._id)
                    } else {
                      setItemIndex(null);
                      setSelectedId(null)
                    }
                  }}>{item.name}</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <ItemDetails selectedId={selectedId} setSelectedItem={setSelectedItem} />
                      </Row>
                      <Row className='justify-content-between'>
                        <Col>
                          <Button variant="outline-primary" onClick={handleEditClick}>Edit</Button>
                        </Col>
                        <Col>
                          <Button variant="outline-danger" onClick={() => setDeletePrompt(true)}>Delete</Button>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>))}
            </Accordion>
          </Row>)
          : (<Col>No items matching {filter}</Col>)}
        {pagination && pagination.pages && (
          <Row className='m-4'>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Col>
                  {pagination.pages.map(page => (
                    <Button
                      className='m-1 col-1'
                      key={page}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSettings({ ...settings, currentPage: page })}
                    >{page}</Button>
                  ))}
                </Col>
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
        )}
      </Container>

      {modal && modalDisplay}
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
            >Delete</Button>
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