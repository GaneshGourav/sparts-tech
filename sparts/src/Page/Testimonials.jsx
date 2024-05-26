import React from "react";
// import { Slider } from "../Components/Slider";
import { SliderTestimonial } from "../components/Slider2";

export const Testomonial = () => {
  return (
    <>
      <div className="  pt-10 pb-14">
        <div className="w-36 flex justify-end items-end md:ml-20 ml-5">
          <h1 className="text-yellow-300 font-bold text-lg">
            Happy Kids, Satisfied Parents
          </h1>
        </div>
        <div className="flex justify-start mt-5">
          <SliderTestimonial />
        </div>
      </div>
    </>
  );
};
