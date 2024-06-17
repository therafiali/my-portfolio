"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Skillstext() {
  const word = `Don't wish for less problems; \n Wish for more skills.`;
  const [isScroll, setIsScroll] = useState(0);
  useEffect(() => {
    function handleScroll() {
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      setIsScroll(scrollValue);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div className="flex sm:hidden">

    {isScroll >= 18 && <TextGenerateEffect words={word} />}
    </div>
    <div className="hidden sm:flex">

    {isScroll >= 34 && <TextGenerateEffect words={word} />}
    </div>
   
  </>
  )
}
