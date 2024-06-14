import Image from "next/image";
import React from "react";
import js from "@/assets/js.png";
import python from "@/assets/python.png";
import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/PYTHONMAN.svg";

const Skillstree = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative  w-full h-full ">
        <Image
          className="absolute top-0  mt-20 w-16 h-16 sm:w-28 sm:h-28"
          src={Greenred}
          alt=""
        />
        <Image src={js} alt="Javascript Based Skills" />
      </div>
      <div className="relative -mt-[101px] md:mt-0 w-full h-full">
        <Image
          className="absolute right-0 top-0 sm:top-0 mt-20 w-20 h-w-20"
          src={Yellow}
          alt=""
          height={300}
          width={300}
        />
        <Image src={python} alt="Python Based Skills" />
      </div>
    </div>
  );
};

export default Skillstree;
