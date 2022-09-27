import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';

import { Modal, Button, Form } from 'react-bootstrap'
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

    return <Modal
        show={modalOpen}
        contentLabel="Add Item">

        <Modal.Header closeButton>
            <Modal.Title>Enter Item Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="name" placeholder="Enter name of item"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="description" placeholder="Enter item description"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="size">

                    <Form.Label>Length:</Form.Label>
                    <Form.Control
                        type="length"
                    />

                    <Form.Label>Width:</Form.Label>
                    <Form.Control
                        type="width"
                    />

                    <Form.Label>Height:</Form.Label>
                    <Form.Control
                        type="height"
                    />

                    <Form.Group>
                        <Form.Label>Weight:</Form.Label>
                        <Form.Control
                            type="weight"
                        />
                    </Form.Group>

                </Form.Group>

                <Form.Group className="mb-3" controlId='section'>
                    <Form.Label>Choose a section:</Form.Label>
                    <Form.Select name="section" id="section" multiple className='form-control'>
                        <option value="">Option</option>
                        <option value="">Option</option>
                        <option value="">Option</option>
                    </Form.Select>
                </Form.Group>

            </Form>

        </Modal.Body>

        <Modal.Footer>
            <Button
                variant='success'
                onClick={() => {
                    setModal('')
                }}
            >Submit</Button>
            <Button
                variant='danger'
                onClick={() => {
                    setModal('')
                }}
            >Close</Button>
        </Modal.Footer>
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

    return <Modal
        show={modalOpen}
        contentLabel="Add Section">
        <Modal.Header closeButton>
            <Modal.Title>Enter Section Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form>

                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="name"
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='full'>
                    <Form.Check
                        type="checkbox"
                        id="full"
                        label="Completely Full?"
                    />
                </Form.Group>

            </Form>
            
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant='success'
                onClick={() => {
                    setModal('')
                }}
            >Submit</Button>
            <Button
                variant='danger'
                onClick={() => {
                    setModal('')
                }}
            >Close</Button>
        </Modal.Footer>

    </Modal>
}

export { ItemModal, SectionModal } 