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
  return (
    <Navbar className="sticky top-5 z-50 w-11/12 sm:w-3/4 lg:w-1/2 mx-auto h-auto sm:h-16 bg-[#eeeeee] backdrop-blur-md rounded-[30px] mb-10  border-1">
      <div className="flex flex-wrap  w-full h-auto sm:h-16 items-center justify-around sm:gap-x-10 md:gap-x-16 lg:gap-x-16 list-none mx-auto rounded-[30px]">
        <NavbarItem className="flex items-center text-lg text-white opa  bg-[#a6a6a6] backdrop-blur-2xl rounded-[24px] h-10 px-4  py-4 w-auto">
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Writing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Chat
          </Link>
        </NavbarItem>
      </div>
    </Navbar>
  );
}
