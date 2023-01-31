import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { CatalogProvider } from './utils/GlobalState';
import Auth from './utils/auth';

import Login from "./components/Login/index.js"
import SignUp from './components/SignUp/index';
import Search from "./components/Search/index.js";
import Header from "./components/Header/index.js";
import Donation from './components/Donation/index';
import ItemDisplay from "./components/ItemDisplay/index.js";
import SectionDisplay from "./components/SectionDisplay/index"


import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql"
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
          <Container>
            <Row className='justify-content-center'>
              <Col className='mx-4 m-4 col-11 col-sm-10 col-md-7 col-lg-6 border border-success rounded bg-light'>
                <Routes>
                  {(Auth.loggedIn()) ? (
                    <>
                      <Route
                        path="/"
                        element={<Search />}
                      />
                      <Route
                        path="/item-display"
                        element={<ItemDisplay />}
                      />
                      <Route
                        path="/section-display"
                        element={<SectionDisplay />}
                      />
                    </>
                  ) : (
                    <>
                      <Route
                        path="*"
                        element={<Login />}
                      />
                      <Route
                        path="/sign-up"
                        element={<SignUp />}
                      />
                    </>
                  )}
                  < Route
                    path="/donation"
                    element={<Donation />}
                  />
                </Routes>
                {/* <footer className='w-100 p-1 mt-5 text-center text-light bg-success'>Made with love for Kelly</footer> */}
              </Col>
            </Row>
          </Container>
        </CatalogProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
