import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { DELETE_ITEM } from '../../utils/mutations';
import { ItemModal } from '../Modals/index'
import ItemDetails from '../ItemDetails/index'
import paginate from '../../utils/paginate';
import { Container, Row, Col, ButtonToolbar, ButtonGroup, Button, Accordion, Form, Modal, CloseButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDisplay() {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM)

  const [selectedItem, setSelectedItem] = useState({});
  const [selectedId, setSelectedId] = useState('')
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [deletePrompt, setDeletePrompt] = useState(false)
  const [itemIndex, setItemIndex] = useState(null)

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
  const [modal, setModal] = useState(false)

  //  page 1: 0   page 2:  19   page: 39
  const paginateData = (page, dataset) => {
    const pageObj = paginate({ ...settings, currentPage: page, totalItems: dataset.length })
    setPagination(pageObj)
    setDisplayData(dataset.slice(pageObj.startIndex, pageObj.endIndex + 1))

  }

  const handleEditClick = () => {
    setModal('item')
    console.log(selectedItem)
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
    if (filter.length > 3) {
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
    if (!loading && originalData.length === 0) {
      setSettings({ ...settings, totalItems: data.items.length })
      setOriginalData(data.items)
    }
  }, [data]);

  if (!displayData.length) return <p>Loading...</p>

  return (
    <>
      <Container fluid className='my-4 h-100'>
        <Row className='m-4'>
          <Form className='p-0 text-center'>
            <h2>Search By Name</h2>
            <Form.Group className='p-0 mt-3'>
              <Container>
                <Row>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control
                      type='text'
                      name="filter"
                      value={filter}
                      onChange={((e) => setFilter(e.target.value))}
                    />
                  </Col>
                  <Col sm="4" md="3" lg="2">
                    <Button
                      variant='outline-primary'
                      type='submit'
                    >Go</Button>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
          </Form>
        </Row>

        <Row className='m-4'>
          <Accordion activeKey={itemIndex}>
            {displayData.map((item, index) => (
              <Accordion.Item key={item._id} className="list-item" eventKey={index}>
                <Accordion.Header onClick={() => {
                  if (!itemIndex) {
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
              </Accordion.Item>
            ))}
          </Accordion>
        </Row>

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
                    >
                      {page}
                    </Button>
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