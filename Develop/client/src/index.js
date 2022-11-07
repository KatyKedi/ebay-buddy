import React from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './scss/custom.scss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker.js';

createRoot(document.getElementById('root')).render(
  <App  />
);

serviceWorker.register();