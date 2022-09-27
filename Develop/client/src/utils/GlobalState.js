import React, { createContext, useContext } from "react";
import { useGlobalReducer } from './reducers'

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const CatalogProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGlobalReducer({
    items: [],
    keyword: '',
    singleItem: '',
    modal: ''
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};



export { CatalogProvider, useGlobalContext };