"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import b1 from "@/assets/Banner1.png";
import b2 from "@/assets/banner2.png";
import b3 from "@/assets/banner3.png";
import b4 from "@/assets/banner4.png";
import b5 from "@/assets/banner5.png";
import b6 from "@/assets/banner9.png";
import b7 from "@/assets/banner10.png";
import b8 from "@/assets/banner11.png";
import b9 from "@/assets/dinemarket.png";

export function ParallexSlider() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "",
    link: "/",
    thumbnail:
      b1,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b2,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b3,
  },

  {
    title: "",
    link: "/",
    thumbnail:
      b4,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b5,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b6,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b7,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b8,
  },
  {
    title: "",
    link: "/",
    thumbnail:
      b9,
  },
  
];
