"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { Home, Phone, SquareUserRound } from "lucide-react";

export default function NavbarHeader() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("highlight");
            const targetLink = document.querySelector(
              "nav a[href*=" + id + "]"
            );
            if (targetLink) {
              targetLink.classList.add("highlight");
            }
          });
        }
      });
    };
  }, []);
  return (
    <div>
      <div className="fixed z-40  pb-8 sm:px-8 bottom-0 left-0 right-0 bg-transparent mx-2 xs:mx-8 fiveforty:mx-14 forhero:mx-20">
        <div className="flex justify-center">
          <div className="shadow-nav bg-gradient-to-r from-black to-gray-800 border border-black rounded-full flex items-stretch px-[6px] shadow-md p-2 w-full sm:w-auto justify-evenly forhero:px-4">
            <nav className="flex justify-evenly  w-full sm:w-auto">
            
                <a
                  href="#home"
                  className="hidden highlight xs:flex items-center justify-center tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right border-red- text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
                >
                  Home
                </a>
                <Link
                  href="/"
                  className="highlight xs:hidden flex items-center justify-center tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right border-red- text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
                >
                  <Home />
                </Link>
             
              <a
                href="#about"
                className=" flex items-center justify-center  tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
              >
                About
              </a>
              <a
                href="#skills"
                className=" flex items-center justify-center  tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className=" flex items-center justify-center  tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className=" hidden xs:flex items-center justify-center tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="xs:hidden flex items-center justify-center tracking-wider text-left [&[align=center]]:text-center [&[align=right]]:text-right  text-white  rounded-[60px] px-1 py-2 sm:px-6 sm:py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]"
              >
                <SquareUserRound />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
