"use client";

import Link from "next/link";
import { AcmeLogo } from "./AcmeLogo";

export default function NavbarHeader() {
  let navbarItems = ["Home","Home","Home","Home","Home",];
  return (
    <div className="fixed z-100  pb-8 px-8 bottom-0 left-0 right-0 bg-transparent">
      <div className="flex justify-center">
        <div className="shadow-nav bg-gradient-to-r from-black to-gray-800 border border-black rounded-full flex items-stretch px-[6px] shadow-md p-2">
          {navbarItems.map((item: any, i: number) => (
            <div key={i} className="">
              <Link className="" color="foreground" href="#">
                <p className="flex items-center justify-center font-medium border-red- text-white  rounded-[60px] p-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-300 hover:translate-x-[2px]">
                  {item}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
