import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const Course = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Document',
        onAfterPrint: () => alert('Print window closed'),
    });
    const singleCourse = useLoaderData();
    const { name, details } = singleCourse;
    return (
        <>
            <div ref={componentRef} className="card w-100 bg-base-100  bg-inherit">
                <div className='flex mx-auto'>
                    <h2 className="card-title mx-auto px-3">Programming with ' {name} '</h2>
                    <button onClick={handlePrint} className="btn btn-outline btn-success">PDF</button>
                </div>
                <figure className="px-10 pt-10">
                    <img src={details.img} alt="Shoes" className="h-48 w-48 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p>{details.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;