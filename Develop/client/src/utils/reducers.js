import { useReducer } from "react";
import {
  UPDATE_ITEMS,
  UPDATE_CURRENT_KEYWORD
} from "./actions";

export const reducer = (state, action) => {
    console.log(action)
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };

    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     cartOpen: true,
    //     cart: [...state.cart, action.product],
    //   };

    // case ADD_MULTIPLE_TO_CART:
    //   return {
    //     ...state,
    //     cart: [...state.cart, ...action.products],
    //   };

    // case REMOVE_FROM_CART:
    //   let newState = state.cart.filter(product => {
    //     return product._id !== action._id;
    //   });

    //   return {
    //     ...state,
    //     cartOpen: newState.length > 0,
    //     cart: newState
    //   };

    // case CLEAR_CART:
    //   return {
    //     ...state,
    //     cartOpen: false,
    //     cart: []
    //   };

    // case TOGGLE_CART:
    //   return {
    //     ...state,
    //     cartOpen: !state.cartOpen
    //   };

    // case UPDATE_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: [...action.categories],
    //   };

    case UPDATE_CURRENT_KEYWORD:
       return {
         ...state,
         keyword: action.keyword
    }

    default:
      return state;
  }
};

export function useItemReducer(initialState) {
  return useReducer(reducer, initialState)
}