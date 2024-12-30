"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function HeroText() {

    const main1 = ` Turning Dreams into Reality`;
    
    const main2 = `Problems into Solutions.`;
    
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

    {isScroll >= 7 && <TextGenerateEffect words={main1} />}
    </div>
    <div className="hidden sm:flex">

    {isScroll >= 22 && <TextGenerateEffect words={main2} />}
    </div>
   
  </>
  )
}
