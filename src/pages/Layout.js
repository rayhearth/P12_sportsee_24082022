import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import SideBar from '@/components/Layout/Sidebar';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <div className='admin' id='admin'>
                <SideBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;