import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
    const details = useLoaderData();
    const notify = () => toast.success('Purchase Complete', { duration: 1000 });
    return (
        <div >
            <div className='m-5 p-5 mx-auto w-1/2 border border-sky-500 rounded'>
                <h1 className='text-center  p-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300 '>Checkout for '{details.name}'</h1>
                <div className='text-center p-3'>
                    <button onClick={notify} className="btn btn-outline btn-success">Purchase</button>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;