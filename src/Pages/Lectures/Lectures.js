import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Lectures = () => {
    const lectures = useLoaderData();
    console.log(lectures)
    const { links } = lectures;

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {
                    links?.map(d =>
                        <iframe key={d} width="435" height="315" src={d} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    )
                }
            </div>
        </div>
    );
};

export default Lectures;