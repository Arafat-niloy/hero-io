import React from 'react';

import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar/>
            <div className='flex-1 bg-gray-50'>

            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;