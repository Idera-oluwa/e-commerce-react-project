import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './context'
import { Auth0Provider } from "@auth0/auth0-react";
import {CartProvider} from './cartContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-5n4p523c.us.auth0.com'
    clientId='wcpQNyrNpwmVuNcfYxVQGp0uuQ7L708D'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </AppProvider>
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
