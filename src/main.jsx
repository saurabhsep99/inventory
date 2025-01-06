import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <CssBaseline />
        <App />
  </Provider>
);