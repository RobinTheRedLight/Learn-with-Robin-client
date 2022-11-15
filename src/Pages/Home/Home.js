import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allData = useLoaderData();
    return (
        <div className='p-8'>
            <h1 className='font-mono text-center font-bold text-4xl text-green-300'>Details:</h1>

            {
                allData.map(data =>
                    <h3 key={data.id} className='pt-3 font-serif text-red-300 text-xl font-bold'># {data.name}:
                        <span className=' text-slate-50 font-sans text-lg font-semibold'>
                            <span> </span>{data.description}
                        </span>
                    </h3>)
            }
        </div>
    );
};

export default Home;