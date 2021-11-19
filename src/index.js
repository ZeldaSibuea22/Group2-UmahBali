import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Routers from './routes';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { AgentsProvider } from "./context/agent-context"
import {PropertiesProvider } from "./context/property-context"


ReactDOM.render(
  <PropertiesProvider>
    <AgentsProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </React.StrictMode>
    </AgentsProvider>
  </PropertiesProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
