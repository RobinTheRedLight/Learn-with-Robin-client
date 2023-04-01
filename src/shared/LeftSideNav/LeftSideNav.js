import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    console.log(allData)
    return (
        <div className='sticky top-0'>
            <div>
                <h1 className='p-6 text-2xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Choose Your Language</h1>
            </div>
            <div className=' pt-10 sm:flex flex-wrap  justify-around items-center'>
                {
                    allData.map(data =>
                        <div key={data.id} className="card sm:w-40 glass">
                            <figure className='p-5'><p className='font-bold text-center text-white'>{data.name}</p></figure>
                            <div className="card-body">

                                <div className="card-actions justify-center">
                                    <Link className="btn btn-primary"
                                        role="button"
                                        to={`/${data.id}`}>
                                        Learn Now!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default LeftSideNav;