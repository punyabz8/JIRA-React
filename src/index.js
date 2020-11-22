import React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
