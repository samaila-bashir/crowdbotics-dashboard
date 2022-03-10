import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import mockSetup from "./__mocks__/mock.setup";

axios.defaults.baseURL = "https://hiring-example-25770.botics.co";
// mockSetup(axios);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
