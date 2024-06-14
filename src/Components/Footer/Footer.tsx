import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="border-t-2   mx-auto pl-4 pr-4 md:pl-6 md:pr-6 ">
      <div className="flex flex-col md:flex-row mt-4 md:gap-x-5 justify-between ">
        <div>
          <p className="text-gray-500 font-bold text-sm md:mt-0   mb-2 mt-2 tracking-wide md:max-w-[11rem]">
            Design by.{" "}
            <Link target="_blank" href={"https://www.github.com/therafiali"}>
              <span className="font-extrabold tracking-wider text-black">
                Rafi Ali
              </span>
            </Link>
          </p>
        </div>
        <div>
          <p className="text-gray-500 font-bold text-sm mt-2 mb-2  md:mt-0 tracking-wide ">
            Code by.
            <Link target="_blank" href={"https://www.github.com/therafiali"}>
              <span className="font-extrabold tracking-wider text-black">
                therafiali on github
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
