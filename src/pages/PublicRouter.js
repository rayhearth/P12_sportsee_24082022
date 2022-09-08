import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout, Dashboard } from '@/pages'

import Error from '@/_utils/Error'


const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        
          <Route path="/" element={<Navigate to="/dashboard/12" />}/>
          <Route path="/dashboard/:userId" element={<Dashboard />}/>
        
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;