import React from "react";
import { MdNavigateNext } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <div className="pb-8">
        <div className="  flex  justify-evenly items-center flex-col md:flex-row  ">
          <div className="  flex items-end">
            <h1
              className="text-4xl text-left font-medium"
              style={{ lineHeight: "60px" }}
            >
              Find the Best <br /> Activity For your <br /> Child!
            </h1>
            <div className=" w-8 h-8 rounded-full bg-sky-300 flex items-center justify-center mb-2 ">
              <MdNavigateNext className="w-full " />
            </div>
          </div>
          <div className="  flex justify-center items-center">
            <img
              src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph"
              alt="image"
              className="w-[70%]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 flex-col md:flex-row text-white font-bold">
          <button className="bg-yellow-400 rounded-half  px-20 py-3 md:px-10 md:py-1 rounded-2xl ">
            For Academies
          </button>
          <button className="bg-yellow-400 rounded-half  px-20 py-3 md:px-10 md:py-1 rounded-2xl ">
            SpArts in Home
          </button>
        </div>
      </div>
    </>
  );
};
