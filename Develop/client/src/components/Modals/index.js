import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_MODAL, UPDATE_CURRENT_MODAL_STATE} from '../../utils/actions';
import { useQuery } from '@apollo/client'
import { QUERY_ITEM } from '../../utils/queries';
import Modal from 'react-modal';

import './style.css'


function ItemModal() {
    const [state, dispatch] = useGlobalContext();
    const [modalClose, setModal] = useState("item")

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            modal: modalClose
        });
      }, [modalClose]);
    
    return <Modal
        isOpen={modalClose}
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
        <button onClick={() => {setModal("")}}>Close</button>
        </Modal>
}

function SectionModal() {
    const [state, dispatch] = useGlobalContext();
    const [modalClose, setModal] = useState("section")
    

    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_MODAL,
            modal: modalClose
        });
      }, [modalClose]);


    return <Modal
        isOpen={modalClose}
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
            setModal("")}}
            >Close</button>
        </Modal>
}

export { ItemModal, SectionModal } 