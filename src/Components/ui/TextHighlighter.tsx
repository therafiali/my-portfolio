"use client";
import { Highlight } from "@/Components/ui/hero-highlight";
import React, { useEffect, useState } from "react";
import { TextHighlighterDemo } from "./text-highligher";

export function TextHighlighter({
  scrollsm,
  scrolllg,
  text,
}: {
  scrollsm: number;
  scrolllg: number;
  text: string;
}) {
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

    {isScroll >= scrollsm && <TextHighlighterDemo>{text}</TextHighlighterDemo>}
    </div>
    <div className="hidden sm:flex">

    {isScroll >= scrolllg && <TextHighlighterDemo>{text}</TextHighlighterDemo>}
    </div>
   
  </>
  )
}
