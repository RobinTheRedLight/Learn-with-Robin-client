import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseLeftSideNav = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    fetch("https://learn-with-robin-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 md:w-80 mx-auto ">
      {courseData.map((data) => (
        <Link
          key={data._id}
          className=" md:w-full btn btn-outline bg-base-100"
          role="button"
          to={`/courses/${data._id}`}
        >
          {data.name}
        </Link>
      ))}
    </div>
  );
};

export default CourseLeftSideNav;
