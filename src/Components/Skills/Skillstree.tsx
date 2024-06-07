import Image from "next/image";
import React from "react";
import js from "@/assets/js.png";
import python from "@/assets/python.png";

const Skillstree = () => {
  return (
    <div className="flex ">
      <div className="border border-red-500">
        <Image src={js} alt="Javascript Based Skills" />
      </div>
      <div className="border border-red-500">
        <Image src={python} alt="Python Based Skills" />
      </div>

    </div>
  );
};

export default Skillstree;
