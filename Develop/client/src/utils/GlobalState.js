import React, { createContext, useContext } from "react";
import { useItemReducer } from './reducers'

const ItemContext = createContext();
const { Provider } = ItemContext;

const CatalogProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useItemReducer({
    items: [],
    keyword: '',
    singleItem: ''
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useItemContext = () => {
  return useContext(ItemContext);
};

export { CatalogProvider, useItemContext };