import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SECTIONS } from '../../utils/queries';
import { UPDATE_CURRENT_SECTION, UPDATE_SECTIONS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { DELETE_SECTION } from '../../utils/mutations';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { SectionModal } from '../Modals/index'

function SectionDisplay() {
  const [state, dispatch] = useGlobalContext();
  const { loading, data } = useQuery(QUERY_SECTIONS);
  const [deleteSection] = useMutation(DELETE_SECTION)

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
    // dispatch({
    //   type: UPDATE_CURRENT_SECTION,
    //   singleSection: selectedSection
    // })
  }, [data, loading, selectedSection, dispatch]);

  const handleSectionClick = (event) => {
    const clickedSection = event.target.getAttribute('id');
    document.querySelectorAll("li").forEach(el => el.classList.remove("bg-warning"));

    if (selectedSection === clickedSection) {
      setSelectedSection('');
    } else {
      setSelectedSection(clickedSection);
      event.target.classList.add("bg-warning");
    }
  }

  const handleEditClick = (event) => {
    if (selectedSection) {
      const sectionName = sections.find(section => section._id === selectedSection).name;
    }
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
            <ul className='text-left list-unstyled'>
              {sections.map(section => (
                <li
                  onClick={(event) => handleSectionClick(event)}
                  id={section._id}
                  className='my-2 p-1 border border-warning rounded bg-gradient'>
                  {section.name}
                </li>))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="outline-primary"
              onClick={(event) => handleEditClick(event)}
            >Edit</Button>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              onClick={(event) => handleDeleteClick(event)}
            >Delete</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SectionDisplay;