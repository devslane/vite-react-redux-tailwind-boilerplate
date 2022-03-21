import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ENV_CONFIG from 'constant/env.config';
import App from './App';

if (ENV_CONFIG.APP_ENV !== 'development') {
  console.log = () => {};
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
