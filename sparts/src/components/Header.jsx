import React from "react";
import { MdNavigateNext } from "react-icons/md";

export const Header = () => {
  
  return (
    <>
      <div className="pb-8"> 

        <div className="  flex  justify-evenly items-center flex-col md:flex-row  ">
          <div className="  flex items-end">
            <h1
              className="flex text-3xl text-start flex-col md:text-4xl   mt-20"
              style={{ lineHeight: "40px" }}
            >
              Find the Best <span>
           Activity For your </span> 
           <span className="flex justify-between items-center">
           Child!
           <div className=" w-10 h-10 rounded-full bg-sky-300 flex items-center justify-center mb-2 mt-5 ">
              <MdNavigateNext className="w-full " />
            </div>
           </span>
           
            </h1>
            {/* <div className=" w-8 h-8 rounded-full bg-sky-300 flex items-center justify-center mb-2 ">
              <MdNavigateNext className="w-full " />
            </div> */}
          </div>
          <div className="  flex justify-center items-center">
            <img
              src="https://www.shutterstock.com/image-vector/happy-kids-read-book-study-600nw-1497902633.jpg"
              alt="image"
              className="w-[70%] bg-white"
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
