import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_ITEM, ADD_SECTION } from '../../utils/mutations';

import { Modal, Button, Form, CloseButton } from 'react-bootstrap'
import './style.css'


function ItemModal() {
    const [state, dispatch] = useGlobalContext();
    const [modalOpen, setModal] = useState('item')

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            modal: modalOpen
        })
    }, [modalOpen])

    const [formState, setFormState] = useState(
        {
            name: '',
            description: '',
            length: '',
            width: '',
            height: '',
            weight: '',
            section: ''
        });
    const [addItem, { error }] = useMutation(ADD_ITEM);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addItem({
                variables: {
                    name: formState.name,
                    description: formState.description,
                    size: `${formState.length} X ${formState.width} X ${formState.height}`,
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

    return <Modal
        show={modalOpen}
        contentLabel="Add Item"
    >

        <Modal.Header>
            <Modal.Title className='text-primary'>Enter Item Details</Modal.Title>
            <CloseButton onClick={() => setModal('')} />
        </Modal.Header>

        <Modal.Body>

            <Form onSubmit={(event) => handleFormSubmit(event)}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name: (required)</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name of item"
                        onChange={handleFormChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="description"
                        placeholder="Enter item description"
                        onChange={handleFormChange}
                    />
                </Form.Group>

                <Form.Group className="mb-1" controlId="length">

                    <Form.Label>Length: (inches)</Form.Label>
                    <Form.Control
                        type="length"
                        onChange={handleFormChange}
                    />
                </Form.Group>
                <Form.Group className="mb-1" controlId="width">
                    <Form.Label>Width: (inches)</Form.Label>
                    <Form.Control
                        type="width"
                        onChange={handleFormChange}
                    />
                </Form.Group>
                <Form.Group className="mb-1" controlId="height">
                    <Form.Label>Height: (inches)</Form.Label>
                    <Form.Control
                        type="height"
                        onChange={handleFormChange}
                    />
                </Form.Group>
                <Form.Group controlId='weight'>
                    <Form.Label>Weight:</Form.Label>
                    <Form.Control
                        type="weight"
                        onChange={handleFormChange}
                    />
                </Form.Group>



                <Form.Group className="mb-3" controlId='section'>
                    <Form.Label>Choose a section: (required)</Form.Label>
                    <Form.Select
                        name="section"
                        id="section"
                        multiple
                        onChange={handleFormChange} required>
                        <option value="1D">1D</option>
                        <option value="2B">2B</option>
                        <option value="3C">3C</option>
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

}

function SectionModal() {
    const [state, dispatch] = useGlobalContext();
    const [modalOpen, setModal] = useState('section')

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            modal: modalOpen
        })
    }, [modalOpen])

    const [formState, setFormState] = useState(
        {
            name: '',
            full: false
        }
    );
    const [addSection, { error }] = useMutation(ADD_SECTION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addSection({
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
        show={modalOpen}
        contentLabel="Add Section">
        <Modal.Header>
            <Modal.Title className='text-primary'>Enter Section Details</Modal.Title>
            <CloseButton onClick={() => setModal('')} />
        </Modal.Header>

        <Modal.Body>

            <Form onSubmit={(event) => handleFormSubmit(event)}>

                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name: (required)</Form.Label>
                    <Form.Control
                        type="name"
                        onChange={handleFormChange}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='full'>
                    <Form.Check
                        type="checkbox"
                        id="full"
                        label="Completely Full?"
                        onChange={handleFormChange}
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