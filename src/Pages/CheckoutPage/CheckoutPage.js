import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>CheckoutPage</h1>
            <h2>{details.name}</h2>
        </div>
    );
};

export default CheckoutPage;