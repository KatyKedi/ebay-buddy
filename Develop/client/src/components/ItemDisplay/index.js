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
import paginate from '../../utils/paginate';

function ItemDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { keyword, section } = state;
  const { loading, data } = useQuery(QUERY_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM)

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalDisplay, setModalDisplay] = useState(<></>)
  const [deletePrompt, setDeletePrompt] = useState(false)

  const [ filter, setFilter ] = useState("")
  const [ displayData, setDisplayData ] = useState([])
  const [ originalData, setOriginalData ] = useState([])

  const [ settings, setSettings ] = useState({
    totalItems: 100,
    currentPage: 0,
    pageSize: 20,
    maxPages: 20
  })

  const [ pagination, setPagination ] = useState({})
  const [modalType, setModal] = useState('')

  //  page 1: 0   page 2:  19   page: 39
  const paginateData = (page, dataset) => {
    const pageObj = paginate({...settings, currentPage: page, totalItems: dataset.length})
    setPagination(pageObj)
    // const startSlice = ((settings.currentPage - 1 ) * settings.pageSize) - (settings.currentPage - 1)

    console.log(pageObj)
    setDisplayData( dataset.slice(pageObj.startIndex, pageObj.endIndex+1))
    
  }

  const handleEditClick = () => {
    setModal('item')
    setModalDisplay(<ItemModal item={selectedItem} />)
  }

  const handleDeleteClick = async () => {
    await deleteItem({ variables: { id: selectedItem._id } })
    setFilteredItems(filteredItems.filter((item) => item._id !== selectedItem._id))
    setSelectedItem({})
  }

  useEffect(() => {
    if( filter.length > 3 ){
      let foundItems = []
      originalData.forEach( item => {
        if( item.name.toLowerCase().includes(filter.toLowerCase()) || ( item.description && item.description.toLowerCase().includes(filter.toLowerCase())) ){
          foundItems.push(item)
        }
      })
      paginateData(1, foundItems)
    } else {
      paginateData( settings.currentPage, originalData)
    }
  }, [filter])

  useEffect(() => {
    if( originalData && originalData.length ){
      paginateData(settings.currentPage + 1, originalData)
    }
  }, [settings])

  useEffect(() => {
    if(!loading && originalData.length === 0 ){
      setSettings({...settings, totalItems: data.items.length})
      setOriginalData(data.items)
    }
  }, [loading, data, originalData]);

  if( !displayData.length ) return <p>Loading...</p>

  return (
    <>
      <Container fluid className='my-4 h-100'>

        <Row>
          <input type="text" name="filter" value={filter} onChange={((e) => setFilter(e.target.value))} />
        </Row>

        <Row>
          { displayData.map((item, index) => (
            <Accordion.Item key={item._id} className="list-item" eventKey={index}>    
              <Accordion.Header onClick={() => setSelectedItem(item)}>{index} - {item.name}</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <ItemDetails item={item} />
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
        </Row>
      </Container>

      { pagination && pagination.pages && (
        <Container>
          <Row>
            { pagination.pages.map( page => (
              <div 
                key={page} 
                style={{ cursor: "pointer", display: "inline", marginRight: "8px" }}
                onClick={ () => setSettings({...settings, currentPage: page })}
              >
                { page }
              </div>
            ))}
          </Row>
        </Container>
      )}



    
      <Container fluid className='my-4 h-100'>
        <Row>
          {(filteredItems.length !== 0) ? (
            <Col>
              {keyword ? (<h2 className='text-center'>Items matching <em className='text-warning'>{keyword}</em></h2>) : (<h2 className='text-center'>All Items</h2>)}
              <Accordion>
                {filteredItems.map((item, index) => (
                  <Accordion.Item
                    key={item._id}
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