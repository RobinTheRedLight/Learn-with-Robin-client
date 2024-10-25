import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const details = useLoaderData();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" lg:w-1/2  ">
        <h1 className="text-center  text-3xl font-semibold ">
          This link will redirect you to course of '{details.name}'
        </h1>
        <div className="text-center p-6">
          <Link to={`/lectures/${details._id}`}>
            <button className="btn bg-black text-white">Get Resources</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
