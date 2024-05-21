"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function NavbarHeader() {
  let navbarItems = ["Home", "About", "Work", "Writing", "Chat"];
  return (
    <Navbar className="sticky top-5 z-50 w-11/12 sm:w-3/4 lg:w-1/2 mx-auto h-auto sm:h-16 bg-[#0c0c0c] backdrop-blur-md rounded-[30px] mb-10  border-1">
      <div className="flex flex-wrap  w-full h-8 sm:h-16 items-center justify-between sm: list-none mx-auto rounded-[30px]">
        <div className="flex mx-3 w-full justify-between">
          {navbarItems.map((item: any, i: number) => (
            <NavbarItem
              key={i}
              className="flex  items-center text-sm sm:text-lg text-white   bg-[#a6a6a6] backdrop-blur-2xl rounded-xl sm:rounded-3xl  sm:h-10 px-2 sm:px-4  sm:py-4 w-auto border"
            >
              <Link color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </div>
    </Navbar>
  );
}
