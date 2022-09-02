import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <div className='admin' id='admin'>
                <SideBar />
                <div id='admin_body'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;