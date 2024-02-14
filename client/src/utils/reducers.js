import { useReducer } from "react";
import {
  UPDATE_ITEMS,
  UPDATE_CURRENT_KEYWORD,
  UPDATE_CURRENT_ITEM,
  UPDATE_CURRENT_MODAL,
  UPDATE_CURRENT_SECTION
} from "./actions";

export const reducer = (state, action) => {
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
    case UPDATE_CURRENT_SECTION:
      return {
        ...state,
        section: action.section
      }
  }
};

export function useGlobalReducer(initialState) {
  return useReducer(reducer, initialState)
}