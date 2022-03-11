import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import mockSetup from "./__mocks__/mock.setup";
import ReduxConfig from "./config/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = ReduxConfig();

axios.defaults.baseURL = "https://hiring-example-25770.botics.co";
// mockSetup(axios);

axios.interceptors.request.use((config)=>{
  const token = store.getState().auth.token;
  console.log(token)
  // @ts-ignore
  // config.headers["X-CSRFToken"] = `${token}`; // this is not working
  if(token){
    // @ts-ignore
    config.headers["Authorization"] = `Token ${token}`; // this is not working
  }
    
  return config;
},(err)=> Promise.reject(err));

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <PersistGate persistor={persistor}>
       <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
