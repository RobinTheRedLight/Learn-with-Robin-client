import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allData = useLoaderData();
  return (
    <div className="p-8 bg-base-200 rounded-lg">
      <h1 className=" text-center font-semibold text-4xl pb-5">
        Language Details
      </h1>

      {allData.map((data) => (
        <h3 key={data.id} className="pt-3 font-semibold text-xl text-justify">
          {data.name}:
          <span className=" font-normal text-lg ">
            <span> </span>
            {data.description}
          </span>
        </h3>
      ))}
    </div>
  );
};

export default Home;
