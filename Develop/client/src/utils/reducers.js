import { useReducer } from "react";
import {
  UPDATE_ITEMS,
  UPDATE_CURRENT_KEYWORD,
  UPDATE_CURRENT_ITEM,
  UPDATE_CURRENT_MODAL
} from "./actions";

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };

    case UPDATE_CURRENT_KEYWORD:
       return {
         ...state,
         keyword: action.keyword
      }

    case UPDATE_CURRENT_ITEM:
      return {
        ...state,
        singleItem: action.singleItem
      }

      case UPDATE_CURRENT_MODAL:
        return {
          ...state,
          modal: action.modal
        }
    

      return state;
  }
};

export function useGlobalReducer(initialState) {
  return useReducer(reducer, initialState)
}