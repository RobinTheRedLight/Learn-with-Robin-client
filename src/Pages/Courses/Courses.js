import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

const Courses = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl pt-5  md:text-5xl font-semibold ">
          Choose Your Favorite Language
        </h1>
        <div className="text-9xl hidden lg:flex items-center justify-center">
          <MdOutlineSubdirectoryArrowLeft />
        </div>
        <div className="text-5xl flex sm:text-7xl lg:hidden">
          <h1 className="text-xl p-4 ">Above</h1>
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Courses;
