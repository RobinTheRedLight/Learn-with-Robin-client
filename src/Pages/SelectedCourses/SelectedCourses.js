import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SelectedCourses = () => {
    const allSelectedCourses = useLoaderData();
    return (
        allSelectedCourses.map(c =>
            <div className='p-5'>
                <div className="card w-100 bg-base-100 border-2  border-white bg-inherit">
                    <figure className="px-10 pt-10">
                        <img src={c.details.img} alt="" className="h-48 w-48 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Programming with ' {c.name} '</h2>
                        <p>{c.details.description}</p>
                        <Link className="btn btn-warning"
                            role="button"
                            to={`/checkout/${c.checkout_id}`}>
                            Get premium access
                        </Link >
                    </div>
                </div>
            </div>
        )

    );
}
export default SelectedCourses;