import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SECTIONS } from '../../utils/queries';
import { UPDATE_CURRENT_SECTION, UPDATE_SECTIONS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { DELETE_SECTION } from '../../utils/mutations';
import { Container, Row, Col, Button, ToggleButton, Accordion } from 'react-bootstrap'
import { SectionModal } from '../Modals/index'

function SectionDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { loading, data } = useQuery(QUERY_SECTIONS);
  const [deleteSection] = useMutation(DELETE_SECTION)

  const navigate = useNavigate();

  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    if (data) {
      // dispatch({
      //   type: UPDATE_SECTIONS,
      //   sections: sections,
      // });
      setSections(data.sections)
    }
    dispatch({
      type: UPDATE_CURRENT_SECTION,
      section: selectedSection
    })
  }, [data, loading, selectedSection, dispatch]);

  const handleViewItems = () => {
    navigate('/item-display', { replace: true })
  }

  const handleEditClick = (e) => {
    console.log(sections)

    const sectionName = sections.find(section => section._id === e.target.id);
    console.log(sectionName)
  }

  const handleDeleteClick = (event) => {
    if (selectedSection) {
      const sectionName = sections.find(section => section._id === selectedSection).name;
      const confirm = window.confirm(
        `Are you sure you'd like to delete:
            ${sectionName}?`)
      if (confirm) {
        deleteSection({ variables: { id: selectedSection } })
      }
    } else {
      window.alert("No section selected.")
    }
  }

  return (
    <>
      <Container className='my-4 h-100'>
        <Row>
          <Col>
            <h2 className='text-center'>All Sections</h2>
            <Accordion>
              {sections.map((section, index) => (
                <Accordion.Item
                  id={section._id}
                  eventKey={index}
                  className='my-2 p-1 border border-warning rounded bg-gradient'>
                  <Accordion.Header onClick={() => setSelectedSection(section.name)}>{section.name}</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row className='justify-content-between'>
                        <Col>
                          <Button
                            variant="outline-warning"
                            onClick={handleViewItems}
                          >View Items</Button>
                        </Col>
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
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SectionDisplay;