import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, Dashboard } from '@/pages'
import { User, Edit } from '@/pages/User'

import Error from '@/_utils/Error'


const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='home' element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path='user'>
          <Route path='index' element={<User />} />
          <Route path='edit/:uid' element={<Edit />} />

        </Route>

        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;