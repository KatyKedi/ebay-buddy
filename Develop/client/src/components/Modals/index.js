import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL } from '../../utils/actions';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';

import { Modal, Button } from 'react-bootstrap'
import './style.css'


function ItemModal() {
    const [state, dispatch] = useGlobalContext();
    const { modal } = state
    const [modalOpen, setModal] = useState('item')

    useEffect(() => {
       
            dispatch({
                type: UPDATE_CURRENT_MODAL,
                modal: modalOpen
            })
    }, [modalOpen])
    
    return  <Modal
        show={modalOpen}>

            <div className='form-row '>
            <h2 className='col-12'>Enter Item Details</h2>
            <form className='form-inline'>
                <div className='col-12 form-group'>
                    <label for="name">Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required
                        minlength="1"
                        className='form-control'
                    />
                </div>
                
                <div className='col-12 form-group'>
                    <label for="description">Description:</label>
                    <input 
                        type="text" 
                        id="description"
                        name="description"
                        className='form-control'
                    />
                </div>
                <div className='col-12 input-group'>
                    <div className='input-group'>
                    
                    <div className='col-3'>
                    <label for="length">Length:</label>
                    <input 
                        type="text"
                        id="length"
                        name="length"
                        className='form-control'
                    />
                    </div>
                    <div className='col-3'>
                    <label for="width">Width:</label>
                        <input
                            type="text"
                            id="width"
                            name="width"
                            className='form-control'
                        />
                    </div>
                    <div className='col-3'>
                    <label for="height">Height:</label>
                    <input 
                        type="text"
                        id="height"
                        name="height"
                        className='form-control'
                    />
                    </div>
                    <div className='col-3 form-group'>
                        <label>Weight:</label>
                        <input
                            type="text"
                            id="weight"
                            name="weight"
                            className='form-control'
                        />
                    </div>
                    </div>
                
                    
                </div>
                <div className="input-group">
                <div className='col-6'>
                    <label for="section">Choose a section:</label>
                    <select name="section" id="section" multiple className='form-control'>
                        <option value=""></option>
                    </select>
                </div>
                <div className='col-6'>
                    <button type='button' className='btn btn-primary'>Submit</button>
                    <Button 
                    variant='danger' 
                    onClick={() => {
                        setModal('')
                    }}>Close</Button>
                </div>
                </div>
                
            </form>
        </div>
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

    return<Modal
        show={modalOpen}
        contentLabel="Add Section">
            <h2>Enter Section Details</h2>
            <form>
            <label for="name">Name:</label>
            <input 
                type="text" 
                id="name"
                name="name" 
                required
                minlength="1"/>
            <label for="full">Completely full:</label>
            <input 
                type="checkbox" 
                id="full"
                name="full" 
                />

            <button>Submit</button>
        </form>
        <button onClick={() => {
                setModal('')
        }}
            >Close</button>
        </Modal>
}

export { ItemModal, SectionModal } 