import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { CatalogProvider } from './utils/GlobalState';

import Login from "./components/Login/index.js"
import Search from "./components/Search/index.js";
import Header from "./components/Header/index.js";
import Donation from './components/Donation/index';
import ItemDisplay from "./components/ItemDisplay/index.js";
import ItemDetails from "./components/ItemDetails/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CatalogProvider>
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/dashboard"
                element={<Search />}
              />
              <Route
                path="/item-display"
                element={<ItemDisplay />}
              />
              <Route
                path="/item-details"
                element={<ItemDetails/>}
              />
              <Route
                path="/donation"
                element={<Donation />}
              />
            </Routes>
          </main>
          </CatalogProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
