import React, { useState, useEffect } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom'

import { useItemContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_KEYWORD } from '../../utils/actions'
import { idbPromise } from '../../utils/helpers';

function Search() {
    const [state, dispatch] = useItemContext();
    const navigate = useNavigate();

    const [itemName, setItemName] = useState('');

    useEffect(() => {
        console.log(itemName)
        if (itemName) {
            dispatch({
                type: UPDATE_CURRENT_KEYWORD,
                keyword: itemName
            });
            idbPromise('keyword', 'put', itemName)
        } else {
            idbPromise('keyword', 'get').then((keyword) => {
                dispatch({
                type: UPDATE_CURRENT_KEYWORD,
                keyword: itemName,
                });
        });
        }
    }, [itemName]);

  console.log(itemName)
  return (
    <main className="background">
      <form onSubmit={(event) => navigate('/item-display', { replace: true })}>
        <div className="text-center container">
          <TextField
            className=""
            id="itemName"
            label="Item Name?"
            variant="outlined"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </div>

        <div className="submitBtn">
                    <input type="submit" />
                </div>
        /* <div className="drop-down text-center container">
          <select className="" name="sections" id="sections">
            <option className="" value="A1"></option>
          </select>
        </div> */
      </form>
    </main>
  );
}

export default Search;