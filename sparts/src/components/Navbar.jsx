import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className=" h-16 border  md:flex justify-end    text-white  bg-sky-400">
        <div className=" md:flex justify-end items-center gap-10 mr-10  hidden">
          <button type="button">Our ustomers</button>
          <button type="button">SpArts Advantage</button>
          <button type="button">contact us</button>
        </div>
      </nav>
    </>
  );
};
