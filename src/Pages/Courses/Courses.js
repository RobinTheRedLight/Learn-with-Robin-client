import React from 'react';
import { FaArrowLeft, FaArrowUp } from 'react-icons/fa';

const Courses = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl p-6 sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Choose Your Favourite Language</h1>
                <div className='text-7xl p-6 hidden lg:block'>
                    <FaArrowLeft />
                </div>
                <div className='text-5xl flex sm:text-7xl p-6 lg:hidden'>
                    <h1 className='text-xl p-4'>Above</h1>
                    <FaArrowUp />
                </div>
            </div>
        </div>
    );
};

export default Courses;