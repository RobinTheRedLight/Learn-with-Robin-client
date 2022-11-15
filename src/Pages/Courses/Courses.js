import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Courses = () => {
    return (
        <div>
            <div>
                <h1 className='p-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Choose Your Favourite Language</h1>
                <div className='text-7xl p-6'>
                    <FaArrowLeft />
                </div>
            </div>
        </div>
    );
};

export default Courses;