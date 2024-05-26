import React from "react";
import { Slider } from "../components/Slider1";

export const Academies = () => {
  return (
    <>
      <div className=" bg-sky-600 ">
        <div className="w-36 flex justify-start md:ml-20 ml-5  ">
          <h1 className="text-white font-bold text-lg">
            Explore Our Top Academies
          </h1>
        </div>
        <div className="flex justify-start mt-5">
          <Slider />
        </div>
        pt-10 pb-14
      </div>
    </>
  );
};
