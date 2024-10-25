import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://learn-with-robin-server.vercel.app/")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div className="sticky top-0">
      <div>
        <h1 className="p-6 text-3xl md:text-5xl font-semibold text-center">
          Choose Your Language
        </h1>
      </div>
      <div className=" pt-5 flex flex-col items-center justify-center gap-10">
        {allData.map((data) => (
          <Link
            key={data.id}
            className="text-2xl text-center bg-base-100 p-7 rounded-full w-full max-w-xl font-semibold"
            role="button"
            to={`/${data.id}`}
          >
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
