"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";
import b1 from "@/assets/Banner1.png";
import b2 from "@/assets/banner2.png";
import b3 from "@/assets/banner3.png";
import b4 from "@/assets/banner4.png";
import b5 from "@/assets/banner5.png";


gsap.registerPlugin(ScrollTrigger);

export default function SliderSection() {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".your-text-wrapper-class");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "+=50%",
    });

    let tl = gsap.timeline();

    tl.to(textWrappers, {
      x: "-50%",
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 2,
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  });
  return (
    <div className="content-wrapper overflow-hidden ">
      {/* Your component content */}
      <div className="your-text-wrapper-class flex justify-center items-center mt-8 sm:mt-0 w-36 h-40 sm:h-screen sm:space-x-4 md:ml[50rem]">
        {/* Your text content */}
        <Image
          className="border rounded-lg"
          src={b1}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b1}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b2}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b3}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b4}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b5}
          alt="Banner"
          width={400}
          height={400}
        />
         <Image
          className="border rounded-lg"
          src={b1}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b2}
          alt="Banner"
          width={400}
          height={400}
        />
        <Image
          className="border rounded-lg"
          src={b3}
          alt="Banner"
          width={400}
          height={400}
        />

      </div>
    </div>
  );
}
