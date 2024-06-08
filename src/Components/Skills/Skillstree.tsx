import Image from "next/image";
import React from "react";
import js from "@/assets/js.png";
import python from "@/assets/python.png";

const Skillstree = () => {
  return (
    <div className="flex ">
      <div className="">
        <Image src={js} alt="Javascript Based Skills" />
      </div>
      <div className="">
        <Image src={python} alt="Python Based Skills" />
      </div>

    </div>
  );
};

export default Skillstree;
