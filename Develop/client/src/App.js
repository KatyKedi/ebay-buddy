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
import SignUp from './components/SignUp/index';
import Search from "./components/Search/index.js";
import Header from "./components/Header/index.js";
import Donation from './components/Donation/index';
import ItemDisplay from "./components/ItemDisplay/index.js";
import ItemDetails from "./components/ItemDetails/index.js";
import SectionDisplay from "./components/SectionDisplay/index"


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
          <div className='row justify-content-center'>
          <main className='mx-4 m-4 col-10 col-sm-8 col-md-7 col-lg-6 border border-success rounded bg-light'>
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/sign-up"
                element={<SignUp />}
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
                element={<ItemDetails />}
              />
              <Route
                path="/section-display"
                element={<SectionDisplay />}
              />
              <Route
                path="/donation"
                element={<Donation />}
              />
            </Routes>
            {/* <footer className='w-100 p-1 mt-5 text-center text-light bg-success'>Made with love for Kelly</footer> */}
          </main>
          
          </div>
       
        </CatalogProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
