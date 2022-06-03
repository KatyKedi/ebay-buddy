import React, { useEffect } from 'react';
import { useItemContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { UPDATE_ITEMS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function ItemDisplay() {
  const [state, dispatch] = useItemContext();
  const { keyword } = state;
  const { loading, data } = useQuery(QUERY_ITEMS);
  console.log(state)
  let filteredItems;

  useEffect(() => {
    if (data) {
      console.log(keyword)
      filteredItems = data.items.filter(item => item.name.includes(keyword));
      console.log(filteredItems)
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
  }, [keyword, data, loading, dispatch]);
  
  return (
  <>
    <div className="container display-container">
        <div className="text-center border">
            <ul className="display-box">
            {/* {filteredItems.forEach(item => (<li>{item.name}</li>))} */}
            </ul>
            
    </div>
        </div>
        <div className="row button-container">
            
    <button className="col btn1 btn btn-primary">View / Edit</button>
    <button className="col btn1 btn btn-danger ">Delete</button>
    <button className="col btn1 btn btn-success">Add</button>
    </div>
    </>
  )
}

export default ItemDisplay;