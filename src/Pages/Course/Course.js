import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const singleCourse = useLoaderData();
    const { name, details } = singleCourse;
    return (
        <div className="card w-100 bg-base-100  bg-inherit">
            <figure className="px-10 pt-10">
                <img src={details.img} alt="Shoes" className="h-48 w-48 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;