"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

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
            links.classList.remove("active");
            const targetLink = document.querySelector(
              "nav a[href*=" + id + "]"
            );
            if (targetLink) {
              targetLink.classList.add("active");
            }
          });
        }
      });
    };
  }, []);
  return (
    <div>
      <div className="fixed z-100  pb-8 px-8 bottom-0 left-0 right-0 bg-transparent">
        <div className="flex justify-center">
          <div className="shadow-nav bg-gradient-to-r from-black to-gray-800 border border-black rounded-full flex items-stretch px-[6px] shadow-md p-2">
            <nav className="flex">
              <a href="#home" className="active flex items-center justify-center font-medium border-red- text-white  rounded-[60px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]">Home </a>
              <a href="#about" className=" flex items-center justify-center font-medium border-red- text-white  rounded-[60px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]">About</a>
              <a href="#services" className=" flex items-center justify-center font-medium border-red- text-white  rounded-[60px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]">Services</a>
              <a href="#portfolio" className=" flex items-center justify-center font-medium border-red- text-white  rounded-[60px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]">Portfolio</a>
              <a href="#contact" className=" flex items-center justify-center font-medium border-red- text-white  rounded-[60px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:text-gray-900 hover:bg-yellow-400 duration-200 hover:translate-x-[2px]">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
