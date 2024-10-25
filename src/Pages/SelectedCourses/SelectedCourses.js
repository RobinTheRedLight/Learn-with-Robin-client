import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SelectedCourses = () => {
  const allSelectedCourses = useLoaderData();
  return allSelectedCourses.map((c) => (
    <div className="p-5 bg-base-200 rounded-lg">
      <div className="card w-100  border-2 bg-base-100">
        <figure className="px-10 pt-10">
          <img src={c.details.img} alt="" className="h-48 w-48 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Programming with ' {c.name} '</h2>
          <p>{c.details.description}</p>
          <Link
            className="btn bg-black text-white"
            role="button"
            to={`/checkout/${c.checkout_id}`}
          >
            Get Resources
          </Link>
        </div>
      </div>
    </div>
  ));
};
export default SelectedCourses;
