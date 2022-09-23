import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useItemContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_KEYWORD } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';
import Modal from 'react-modal';

import "./style.css";

function Search() {
    const [state, dispatch] = useItemContext();
    const navigate = useNavigate();

    const [itemName, setItemName] = useState('');

    useEffect(() => {
      dispatch({
          type: UPDATE_CURRENT_KEYWORD,
          keyword: itemName
      });
    }, [itemName]);

    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
          onClick={() => openModal()}
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
          // onClick={(event) => handleAddClick(event)}
          >
          Add Section
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Item">
          <h2>Item Details</h2>
          <form>
            <input 
              type="text" 
              id="name" 
              required
              minlength="1"/>
            <input 
              type="text" 
              id="description"
            />
            <button>Submit</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}

export default Search;