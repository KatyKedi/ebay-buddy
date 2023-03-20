import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_SECTIONS } from '../../utils/queries';
import { ADD_ITEM, EDIT_ITEM, ADD_SECTION, EDIT_SECTION } from '../../utils/mutations';

import { Modal, Button, Form, CloseButton } from 'react-bootstrap'

function ItemModal({ modal, setModal, selectedItem }) {
    const [itemState, setItemState] = useState(selectedItem)
    const [sections, setSections] = useState([])
    const { data } = useQuery(QUERY_SECTIONS)
    const [addItem] = useMutation(ADD_ITEM)
    const [editItem] = useMutation(EDIT_ITEM)

    useEffect(() => {
        data && setSections(data.sections)
    }, [data])

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (itemState._id) {
            try {
                await editItem({
                    variables: {
                        id: itemState._id,
                        name: itemState.name,
                        description: itemState.description,
                        size: `${itemState.length}x${itemState.width}x${itemState.height}`,
                        weight: parseFloat(itemState.weight),
                        section: itemState.section
                    },
                });
                window.location.reload()
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                await addItem({
                    variables: {
                        name: itemState.name,
                        description: itemState.description,
                        size: `${itemState.length}x${itemState.width}x${itemState.height}`,
                        weight: parseFloat(itemState.weight),
                        section: itemState.section
                    },
                });
                window.location.reload()
            } catch (e) {
                console.log(e);
            }
        }
    };

    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setItemState({
            ...itemState,
            [id]: value,
        });
    };

    return (
        <Modal
            show={modal ? true : false}
            onHide={() => setModal(false)}
            label="Add Item"
        >
            <Modal.Header>
                <Modal.Title className='text-primary'>Enter Item Details</Modal.Title>
                <CloseButton onClick={() => {
                    setModal(false)
                }} />
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(event) => handleFormSubmit(event)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name: (required)</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter name of item"
                            onChange={handleFormChange}
                            value={itemState.name || ""}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            type="description"
                            placeholder="Enter item description"
                            onChange={handleFormChange}
                            value={itemState.description || ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="length">
                        <Form.Label>Length: (inches)</Form.Label>
                        <Form.Control
                            type="length"
                            onChange={handleFormChange}
                            value={itemState.length || ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="width">
                        <Form.Label>Width: (inches)</Form.Label>
                        <Form.Control
                            type="width"
                            onChange={handleFormChange}
                            value={itemState.width || ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="height">
                        <Form.Label>Height: (inches)</Form.Label>
                        <Form.Control
                            type="height"
                            onChange={handleFormChange}
                            value={itemState.height || ''}
                        />
                    </Form.Group>
                    <Form.Group controlId='weight'>
                        <Form.Label>Weight:</Form.Label>
                        <Form.Control
                            type="weight"
                            onChange={handleFormChange}
                            value={itemState.weight || ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='section'>
                        <Form.Label>Choose a section: (required)</Form.Label>
                        <Form.Select
                            name="section"
                            id="section"
                            type="section"
                            onChange={handleFormChange} required>
                            {sections && sections.map((section) => (<option key={section._id} value={section}>{section.name}</option>))}
                        </Form.Select>
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
                        setModal(false)
                    }}
                >Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function SectionModal({ modal, setModal, selectedSection }) {
    const [sectionState, setSectionState] = useState(selectedSection)
    const [addSection] = useMutation(ADD_SECTION)
    const [editSection] = useMutation(EDIT_SECTION)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (sectionState._id) {
            try {
                await editSection({
                    variables: {
                        id: sectionState._id,
                        name: sectionState.name,
                        full: sectionState.full
                    },
                });
                setModal(false)
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                await addSection({
                    variables: {
                        name: sectionState.name,
                        full: sectionState.full
                    },
                });
                setModal(false)
            } catch (e) {
                console.log(e);
            }
        }
    };

    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setSectionState({
            ...sectionState,
            [id]: value,
        });
    };

    return <Modal
        show={modal ? true : false}
        onHide={() => setModal(false)}
        label="Add Section">
        <Modal.Header>
            <Modal.Title className='text-primary'>Enter Section Details</Modal.Title>
            <CloseButton onClick={() => {
                setModal(false)
            }} />
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(event) => handleFormSubmit(event)}>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name: (required)</Form.Label>
                    <Form.Control
                        type="name"
                        onChange={handleFormChange}
                        value={sectionState.name}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='full'>
                    <Form.Check
                        type="checkbox"
                        id="full"
                        label="Completely Full?"
                        onChange={handleFormChange}
                        checked={sectionState.full}
                    />
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
                    setModal(false)
                }}
            >Close</Button>
        </Modal.Footer>
    </Modal>
}

export { ItemModal, SectionModal } 