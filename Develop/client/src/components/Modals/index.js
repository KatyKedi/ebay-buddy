import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ITEM, QUERY_SECTIONS } from '../../utils/queries';
import { ADD_ITEM, ADD_SECTION } from '../../utils/mutations';
import { Modal, Button, Form, CloseButton } from 'react-bootstrap'

function ItemModal({ modal, setModal, selectedItem }) {
    const [itemState, setItemState] = useState(selectedItem)
    const [sections, setSections] = useState([])
    const { data }= useQuery(QUERY_SECTIONS)
    const [addItem, { error }] = useMutation(ADD_ITEM);

    useEffect(() => {
        data && setSections(data.sections)
    }, [data])

    const handleFormSubmit = async (event) => {
        event.preventDefault();
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
            setModal(false)
        } catch (e) {
            console.log(e);
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
                            multiple
                            onChange={handleFormChange} required>
                            {sections&& sections.map((section) => (<option key={section._id} value={section}>{section.name}</option>))}                           
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
            {error ? (
                <div>
                    <p className="error-text">The provided values are invalid</p>
                </div>
            ) : null}
        </Modal>
    )
}

function SectionModal(props) {
    const { section } = props
    const [state, dispatch] = useGlobalContext();
    const [modalOpen, setModal] = useState('section')

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            modal: modalOpen
        })
    }, [modalOpen, dispatch])

    const [selectedItem, setselectedItem] = useState(section);
    const [addSection, { error }] = useMutation(ADD_SECTION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addSection({
                variables: {
                    name: selectedItem.name,
                    full: selectedItem.full
                },
            });
            setModal('')
        } catch (e) {
            console.log(e);
        }
    };

    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setselectedItem({
            ...selectedItem,
            [id]: value,
        });
    };

    return <Modal
        show={modalOpen && true}
        label="Add Section">
        <Modal.Header>
            <Modal.Title className='text-primary'>Enter Section Details</Modal.Title>
            <CloseButton onClick={() => {
                setModal('')
            }} />
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(event) => handleFormSubmit(event)}>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name: (required)</Form.Label>
                    <Form.Control
                        type="name"
                        onChange={handleFormChange}
                        value={selectedItem.name}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='full'>
                    <Form.Check
                        type="checkbox"
                        id="full"
                        label="Completely Full?"
                        onChange={handleFormChange}
                        checked={selectedItem.full}
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
                    setModal('')
                }}
            >Close</Button>
        </Modal.Footer>
    </Modal>
}

export { ItemModal, SectionModal } 