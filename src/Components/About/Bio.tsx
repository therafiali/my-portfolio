import React from "react";

const Bio = () => {
  let bioArr = [
    "Full Stack Nextjs Developer",
    "Gen AI Developer",
    // "Frontend Developer",
    // "Wordpress Developer",
    // "Problem Solver",
    // "Automation Developer",
  ];
  return (
    // <div className="flex space-x-16 animate-loop-scroll">
    //
    // </div>
    <div className="fixed z-40  pb-8 sm:px-8 bottom-0 left-0 right-0 bg-transparent mx-2 xs:mx-8 fiveforty:mx-14 forhero:mx-20">
      <div className="flex justify-center">
        <div className="shadow-nav bg-gradient-to-r from-black to-gray-800 border border-black rounded-full flex items-stretch px-[6px] shadow-md p-2 w-full sm:w-auto justify-evenly forhero:px-4">
          <nav className="flex justify-evenly  w-full sm:w-auto nimate-loop-scroll">
            {bioArr.map((item, idx) => (
              <div className="flex items-center justify-center  tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]" key={idx}>{item}</div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Bio;
