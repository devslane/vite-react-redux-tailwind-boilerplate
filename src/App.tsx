import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// HOC
import UnauthenticatedRouteHOC from 'HOC/UnauthenticatedRoute';
import AuthenticatedRouteHOC from 'HOC/AuthenticatedRoute';
// store
import store from 'store';
// components
import Dashboard from 'views/Dashboard';

const App: React.FC = () => (
  <Provider store={store}>
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
