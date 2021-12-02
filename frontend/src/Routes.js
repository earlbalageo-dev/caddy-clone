import React from 'react';
import { Routes as MyRoutes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/landing/Landing';

const Routes = () => {
  return (
    <MyRoutes>
      <Route path='/' element={<Landing />} />
    </MyRoutes>
  );
};

export default Routes;
