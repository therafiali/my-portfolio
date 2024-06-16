import React from "react";
import dot from "@/assets/bluedot.svg";
import Image from "next/image";

const Bio = () => {
  let bioArr = [
    "Wordpress Developer",
    "Full Stack Nextjs Developer",
    "Generative AI Developer",
    "Frontend Developer",
    "Python Developer",
    "Problem Solver",
    "Automation Developer",
    "Full Stack Nextjs Developer",
    "Generative AI Developer",
    "Python Developer",
    "Frontend Developer",
    "Wordpress Developer",
    "Problem Solver",
    "Automation Developer",
  ];
  return (
    // <div className="flex space-x-16 animate-loop-scroll">
    //
    // </div>
    <div className="z-40  pb-8 sm:px-8 bottom-0 left-0 right-0 bg-transparent mx-2 xs:mx-8 fiveforty:mx-14 forhero:mx-20">
      <div className="flex justify-center">
        <div className="shadow-nav bg-gradient-to-r from-black to-gray-800 border border-black rounded-full flex items-stretch px-[6px] shadow-md p-2 w-full sm:w-auto justify-evenly forhero:px-4 overflow-hidden .logo-marquee__wrapper group">
          <nav className="flex justify-evenly w-[50rem]   animate-loop-scroll group-hover:paused">
            {bioArr.map((item, idx) => (
              <>
                <div
                  className=" flex items-center justify-center  tracking-wider font-sans text-sm sm:text-lg text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-3 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400   hover:translate-x-[2px] text-nowrap"
                  key={idx}
                >
                  <Image
                    className="mr-1 sm:mr-4"
                    src={dot}
                    alt="*"
                    width={10}
                    height={10}
                  />
                  {item}
                </div>
              </>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Bio;
