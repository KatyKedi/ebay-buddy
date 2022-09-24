import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL, UPDATE_CURRENT_MODAL_STATE} from '../../utils/actions';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';
import Modal from 'react-modal';

import './style.css'


function ItemModal() {
    const [state, dispatch] = useGlobalContext();
    const [modalIsOpen, setIsOpen] = useState(true);
    const [modal, setModal] = useState('item')

    function closeModal() {
        console.log('closing modal')
        setModal('')
        setIsOpen(false);
    }

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            keyword: modal
        });
        dispatch({
            type: UPDATE_CURRENT_MODAL_STATE,
            keyword: modalIsOpen
        });
      }, [modal, modalIsOpen]);
    

    return <Modal
        isOpen={modalIsOpen}
        contentLabel="Add Item">
            <h2>Enter Item Details</h2>
            <form>
            <label for="name">Name:</label>
            <input 
                type="text" 
                id="name"
                name="name" 
                required
                minlength="1"/>
            <label for="description">Description:</label>
            <input 
                type="text" 
                id="description"
                name="description"
            />
            <label for="size">Size:</label>
            <input 
                type="text"
                id="length"
                name="size"
            />
            <span>X</span>
            <input
                type="text"
                id="width"
                name="size"
            />
            <span>X</span>
            <input 
                type="text"
                id="height"
                name="size"
            />
            <label>Weight:</label>
            <input
                type="text"
                id="weight"
                name="weight"
            />
            <label for="section">Choose a section:</label>

            <select name="section" id="section">
                {
                
                }
                <option value=""></option>
            </select>

            <button>Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
        </Modal>
}

function SectionModal() {
    const [state, dispatch] = useGlobalContext();
    const [modalIsOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL_STATE,
            keyword: modalIsOpen
        });
      }, [modalIsOpen]);

    return <Modal
        isOpen={modalIsOpen}
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
            <label for="full">Is it completely full?</label>
            <input 
                type="checkbox" 
                id="full"
                name="full" 
                />

            <button>Submit</button>
        </form>
        <button onClick={() => {
            closeModal()}}
            >Close</button>
        </Modal>
}

export { ItemModal, SectionModal } 