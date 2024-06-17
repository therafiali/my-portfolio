"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Projecttext() {
  const word = `It's a showcase of progress, what you've learned, and your plans for what comes next.`;
  const [isScroll, setIsScroll] = useState(0);

  console.log(isScroll);
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

    {isScroll >= 27 && <TextGenerateEffect words={word} />}
    </div>
    <div className="hidden sm:flex">

    {isScroll >= 45 && <TextGenerateEffect words={word} />}
    </div>
   
  </>
  )
  
}
