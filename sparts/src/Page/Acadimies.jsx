import React from "react";
import { Slider } from "../components/Slider1";
import "../App.css"

export const Academies = () => {
  return (
    <>
      <div className=" bg-sky-600 pt-10 pb-5 ">
        <div className="w-36 flex justify-start md:ml-24  ">
          <h1 className="text-white font-bold text-lg animation">
            Explore Our Top Academies
          </h1>
        </div>
        <div className="flex justify-start mt-5">
          <Slider />
        </div>
      </div>
    </>
  );
};
