"use client";
import { Highlight } from "@/Components/ui/hero-highlight";
import React, { useEffect, useState } from "react";

export function Contacthighlight() {
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
  return isScroll >= 89 ? <Highlight>therafiali@gmail.com</Highlight> : null;
}
