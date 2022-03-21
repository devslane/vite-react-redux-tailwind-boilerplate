import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// @ts-ignore
if (process.env.APP_ENV !== 'development') {
  console.log = () => {};
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
