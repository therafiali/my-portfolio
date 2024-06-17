"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function AboutText() {
  const word = `I'm a passionate developer who thrives on building smart solutions
  across the digital landscape. Websites, tools, scripts, APIs, and even
  generative AI-powered chatbots, I leverage cloud-native technologies to
  create innovative platforms that adapt and grow. Let's collaborate on
  your next digital adventure.`;
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

    {isScroll >= 7 && <TextGenerateEffect words={word} />}
    </div>
    <div className="hidden sm:flex">

    {isScroll >= 22 && <TextGenerateEffect words={word} />}
    </div>
   
  </>
  )
}
