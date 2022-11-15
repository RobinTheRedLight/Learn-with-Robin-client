import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseLeftSideNav = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])
    return (
        <div className="grid grid-cols-1 gap-4 w-80 mx-auto">
            {
                courseData.map(data =>
                    <Link key={data._id} className="btn btn-outline text-white"
                        role="button"
                        to={`/courses/${data._id}`}>
                        {data.name}
                    </Link >)
            }
        </div>
    );
};

export default CourseLeftSideNav;

