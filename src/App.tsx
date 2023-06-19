import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// HOC
import UnauthenticatedRouteHOC from 'HOC/UnauthenticatedRoute';
import AuthenticatedRouteHOC from 'HOC/AuthenticatedRoute';
// store
import store from 'store';
// components
import Dashboard from 'views/Dashboard';

const App: React.FC = () => (
  <Provider store={store}>
    <ToastContainer
      theme='dark'
      limit={5}
      closeButton={false}
      pauseOnFocusLoss={false}
      toastClassName='relative flex p-4 rounded-10 tracking-wider justify-between overflow-hidden cursor-pointer font-bold text-sm'
    />
    <BrowserRouter>
      <Routes>
        <Route path='/login' Component={UnauthenticatedRouteHOC(Dashboard)} />
        <Route path='/' Component={AuthenticatedRouteHOC(Dashboard)} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
