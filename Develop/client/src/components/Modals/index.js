import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ITEM } from '../../utils/queries';
import { ADD_ITEM, ADD_SECTION } from '../../utils/mutations';
import { Modal, Button, Form, CloseButton } from 'react-bootstrap'

function ItemModal(props) {
    const [state, dispatch] = useGlobalContext();
    const [modalOpen, setModal] = useState('item')
    const [formState, setFormState] = useState({});
    const [addItem, { error }] = useMutation(ADD_ITEM);
    const { item } = props
    const { data } = useQuery(QUERY_ITEM, { variables: { id: item._id } });

    useEffect(() => {
        if (data) {
            console.log(data.item)
            setFormState(data.item)
        }
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            modal: modalOpen
        })
    }, [modalOpen, data])

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addItem({
                variables: {
                    name: formState.name,
                    description: formState.description,
                    size: `${formState.length}x${formState.width}x${formState.height}`,
                    weight: parseFloat(formState.weight),
                    section: formState.section
                },
            });
            setModal('')
        } catch (e) {
            console.log(e);
        }
    };

    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    return (
        <Modal
            show={modalOpen && true}
            contentLabel="Add Item"
        >
            <Modal.Header>
                <Modal.Title className='text-primary'>Enter Item Details</Modal.Title>
                <CloseButton onClick={() => {
                    setModal('')
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
                            value={formState.name}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            type="description"
                            placeholder="Enter item description"
                            onChange={handleFormChange}
                            value={formState.description ? formState.description : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="length">
                        <Form.Label>Length: (inches)</Form.Label>
                        <Form.Control
                            type="length"
                            onChange={handleFormChange}
                            value={formState.length ? formState.length : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="width">
                        <Form.Label>Width: (inches)</Form.Label>
                        <Form.Control
                            type="width"
                            onChange={handleFormChange}
                            value={formState.size ? formState.width : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="height">
                        <Form.Label>Height: (inches)</Form.Label>
                        <Form.Control
                            type="height"
                            onChange={handleFormChange}
                            value={formState.size ? formState.height : ''}
                        />
                    </Form.Group>
                    <Form.Group controlId='weight'>
                        <Form.Label>Weight:</Form.Label>
                        <Form.Control
                            type="weight"
                            onChange={handleFormChange}
                            value={formState.weight ? formState.weight : ''}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='section'>
                        <Form.Label>Choose a section: (required)</Form.Label>
                        <Form.Select
                            name="section"
                            id="section"
                            multiple
                            onChange={handleFormChange} required>
                            { }
                            <option value={formState.section}></option>
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
                        setModal('')
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

    const [formState, setFormState] = useState(section);
    const [addSection, { error }] = useMutation(ADD_SECTION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addSection({
                variables: {
                    name: formState.name,
                    full: formState.full
                },
            });
            setModal('')
        } catch (e) {
            console.log(e);
        }
    };

    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    return <Modal
        show={modalOpen && true}
        contentLabel="Add Section">
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
                        value={formState.name}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='full'>
                    <Form.Check
                        type="checkbox"
                        id="full"
                        label="Completely Full?"
                        onChange={handleFormChange}
                        checked={formState.full}
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