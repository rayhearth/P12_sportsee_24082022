import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, Dashboard } from '@/pages'
import Error from '@/_utils/Error'
import User from '@/pages/User';


const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='home' element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path ='user' element={<User/>}/>

        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;