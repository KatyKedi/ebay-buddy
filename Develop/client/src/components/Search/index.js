import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useItemContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_KEYWORD } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';

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

    const handleAddClick = (event) => {
      console.log('add item')
    }

  return (
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
        <button className="dashBtn" type="submit">View Items</button>
 
      </form>
      <h2>OR</h2>
      <button className="dashBtn" type="button">View All Items</button> 
      <button 
            className="col btn1 btn btn-success"
            onClick={(event) => handleAddClick(event)}
          >Add</button>
      <button className="dashBtn" type="button">View All Sections</button>
      <button className="dashBtn" type="button">Add Section</button>
    </div>
  );
}

export default Search;