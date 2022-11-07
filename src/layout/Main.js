import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-blue-200 h-screen p-8 grid  lg:grid-cols-2 md:grid-cols-1 gap-6'>
                <div className='rounded-lg bg-violet-500 py-4'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='rounded-lg bg-purple-600 py-4'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;