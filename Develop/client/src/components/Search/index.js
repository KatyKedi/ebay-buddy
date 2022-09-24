import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_KEYWORD, UPDATE_CURRENT_MODAL, UPDATE_CURRENT_MODAL_STATE } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';
import { ItemModal, SectionModal } from '../Modals/index'

import "./style.css";


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

    const [modal, setModal] = useState('')
    const [selectedModal, setSelectedModal] = useState(<></>)
    const [modalIsOpen, setIsOpen] = useState(false)

    useEffect(() => {
      dispatch({
          type: UPDATE_CURRENT_MODAL,
          keyword: modal
      });
      dispatch({
        type: UPDATE_CURRENT_MODAL_STATE,
        keyword: modalIsOpen
      })
      selectModal()
    }, [modal]);

    function selectModal() {
        if(modal === 'item') {
          setIsOpen(true)
          setSelectedModal(<ItemModal />)
        } else if (modal ==='section'){
          setIsOpen(true)
          setSelectedModal(<SectionModal />)
        } else {
          setIsOpen(false)
          setSelectedModal(<></>)
        }
    }

  return (
    <>
      <div className="background">
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
        <button 
          type="button" className="btn btn-primary"
          onClick={ () => {
            console.log(modal);
            setModal('item')}}
          >Add Item
        </button>
        <button 
          className="col btn1 btn btn-primary" 
          type="button">
          View All Sections
        </button>
        <button 
          className="col btn1 btn btn-success" 
          id="add-section"
          onClick={() => setModal('section')}>
          Add Section
        </button>
      </div>
      {selectedModal}
    </>
  );
}

export default Search;