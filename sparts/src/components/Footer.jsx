import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className=" bg-yellow-500 pb-10 pt-10">
        <div className="flex flex-col justify-center items-center text-white ">
          <p className="font-bold text-2xl space-x-2 tracking-wide">
            Stay Updated
          </p>
          <p className="text-[14px]">
            Get the latest update on academies near you!{" "}
          </p>
        </div>
        <div className="flex  justify-center items-center gap-5 mt-16">
          <input
            type="email"
            placeholder="E-mail"
            className="pl-2 rounded-lg pt-1 pb-1 "
          />
          <button className="pl-6 pr-6 pt-1 pb-1 bg-sky-500 rounded-lg text-white">
            Subscribe
          </button>
        </div>
      </footer>
    </>
  );
};
