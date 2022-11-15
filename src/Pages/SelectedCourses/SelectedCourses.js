import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SelectedCourses = () => {
    const allSelectedCourses = useLoaderData();
    return (
        allSelectedCourses.map(c =>
            <div className='p-5'>
                <div className="card w-100 bg-base-100 border-2  border-white bg-inherit">
                    <figure className="px-10 pt-10">
                        <img src={c.details.img} alt="Shoes" className="h-48 w-48 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{c.name}</h2>
                        <p>{c.details.description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    );
}
export default SelectedCourses;