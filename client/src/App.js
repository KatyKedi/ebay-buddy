import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Dashboard from "./components/Dashboard/index.js";
import Header from "./components/Header/index.js";
import Donation from './components/Donation/index';
import ItemDisplay from "./components/ItemDisplay/index.js";
import SectionDisplay from "./components/SectionDisplay/index"

import { Container, Row, Col } from "react-bootstrap"
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
  const [modal, setModal] = useState(false)
  const [selectedSection, setSelectedSection] = useState({})

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CatalogProvider>
          <Header />
          <Container className='mb-4'>
            <Row className='justify-content-center'>
              <Col className='mx-4 m-4 col-11 col-sm-10 col-md-7 col-lg-6 border border-success rounded bg-light'>
                <Routes>
                  {(Auth.loggedIn()) ? (
                    <>
                      <Route
                        path="*"
                        element={<Dashboard modal={modal} setModal={setModal} />}
                      />
                      <Route
                        path="/item-display"
                        element={<ItemDisplay modal={modal} setModal={setModal} selectedSection={selectedSection} setSelectedSection={setSelectedSection} />}
                      />
                      <Route
                        path="/section-display"
                        element={<SectionDisplay modal={modal} setModal={setModal} selectedSection={selectedSection} setSelectedSection={setSelectedSection} />}
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
              </Col>
            </Row>
          </Container>
          <Container fluid className='fixed-bottom p-0'>
            <footer className='w-100 p-2 mt-5 text-center text-light bg-success'>Made with love for Kelly</footer>
          </Container>
        </CatalogProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
