import React from "react";
import { Outlet } from "react-router-dom";
import CourseLeftSideNav from "../shared/CourseLeftSideNav/CourseLeftSideNav";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const CourseLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className=" h-full sm:p-8 grid  lg:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="bg-base-200 rounded-lg py-8">
          <CourseLeftSideNav></CourseLeftSideNav>
        </div>
        <div className="bg-base-200 rounded-lg py-4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CourseLayout;
