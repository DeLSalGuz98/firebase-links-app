import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataLinkProvider } from './context/dataLinkContext';
//importamos bootswatch
import 'bootswatch/dist/quartz/bootstrap.min.css';
//importamos firebase
import './services/firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataLinkProvider>
    <App />,
  </DataLinkProvider>
)
