import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_KEYWORD, UPDATE_CURRENT_MODAL } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';
import { ItemModal, SectionModal } from '../Modals/index'

import "./style.css";
import { Modal, Button } from "react-bootstrap";


function Search() {
    const [state, dispatch] = useGlobalContext();
   
    const navigate = useNavigate();

    const [itemName, setItemName] = useState('');

    useEffect(() => {
      dispatch({
          type: UPDATE_CURRENT_KEYWORD,
          keyword: itemName
      });
    }, [itemName]);

    const [modalDisplay, setModalDisplay] = useState(<></>)
    const [modalType, setModal] = useState('')

    useEffect(() => {
      selectModal()
        dispatch({
          type: UPDATE_CURRENT_MODAL,
          modal: modalType
        })
    }, [modalType, dispatch]);

    const selectModal = () => {
      const { modal } = state
      if (modal === 'item'){
        setModalDisplay(<ItemModal />)
      }
      else if (modal === 'section') {
        setModalDisplay(<SectionModal />)
      } else {
        setModal("")
        setModalDisplay(<></>)
      }
    }
    return ( 
      <div>
        <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          navigate('/item-display', { replace: true });
          }}>
          <div className="text-center container">
            <h2>Search By Name</h2>
            <input
              className="input"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
            />
          </div>
          <button className="col btn1 btn btn-light" type="submit">View Items</button>

        </form>
        <h2>OR</h2>
        <button 
          className="col btn1 btn btn-primary" 
          type="button">
          View All Items
        </button> 
        <Button 
          variant='success'
          onClick={ (e) => {
            setModal('item')
          }}
          >Add Item
        </Button>
        <button 
          className="col btn1 btn btn-primary" 
          type="button">
          View All Sections
        </button>
        <button 
          className="col btn1 btn btn-success" 
          id="add-section"
          onClick={(e) => {
            setModal('section')
            }}>
          Add Section
        </button>
      </div> 
    
      {modalDisplay}
      
      </div>
  );
}
export default Search;