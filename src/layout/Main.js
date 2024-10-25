import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className=" h-full my-5  grid  lg:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="rounded-lg py-4 bg-base-200">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" rounded-lg  ">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
