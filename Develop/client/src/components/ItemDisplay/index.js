import React, { useEffect, useState } from 'react';
import { useItemContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { UPDATE_CURRENT_ITEM, UPDATE_ITEMS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { useNavigate } from 'react-router-dom';

function ItemDisplay() {
  const [state, dispatch] = useItemContext();
  const { keyword } = state;
  const { loading, data } = useQuery(QUERY_ITEMS);
  const navigate = useNavigate();

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    if (data) {
      setFilteredItems(data.items.filter(item => item.name.includes(keyword)));
      dispatch({
        type: UPDATE_ITEMS,
        items: filteredItems,
      });
      filteredItems.forEach((item) => {
        idbPromise('items', 'put', item);
      });
    } else if (!loading) {
      idbPromise('items', 'get').then((items) => {
        dispatch({
          type: UPDATE_ITEMS,
          items: items,
        });
      });
    }
    dispatch({
      type: UPDATE_CURRENT_ITEM,
      singleItem: selectedItem
    })
  }, [data, loading, selectedItem, keyword, dispatch]);

  const handleItemClick = (event) => {
    setSelectedItem(event.target.getAttribute('id'))
  }

  const handleViewClick = (event) => {
    if (selectedItem) {
      navigate('/item-details', { replace: true })
    }
  }

  if (filteredItems) {
    return (
      <>
        <div className="container display-container">
            <div className="text-center border">
                <ul className="display-box">
                  {filteredItems.map(item => (
                  <li 
                    onClick={(event) => handleItemClick(event)}
                    id={item._id}>
                  {item.name}
                  </li>))}
                </ul>     
            </div>
        </div>
        <div className="row button-container">       
          <button 
            className="col btn1 btn btn-primary"
            onClick={(event) => handleViewClick(event)}
          >View | Edit</button>
          
          <button className="col btn1 btn btn-danger ">Delete</button>
          <button className="col btn1 btn btn-success">Add</button>
        </div>
      </>
    )
  }
  else {
    return (
      <h1>No items to display</h1>
    )
  }
}

export default ItemDisplay;