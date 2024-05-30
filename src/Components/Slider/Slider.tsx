"use client";
import Image from "next/image";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Slider() {
  // useEffect(() => {
  //   const element = document.querySelector("[data-scroll-container]");

  //   if (element instanceof HTMLElement) {
  //     const lscroll = new LocomotiveScroll({
  //       el: element,
  //       smooth: true,
  //       direction: "horizontal",
  //     });
  //   } else {
  //     console.error("Element not found");
  //   }


  //   const images = document.querySelectorAll(".gallery__item-imginner");
  //   Promise.all(
  //     Array.from(images).map(
  //       (img) =>
  //         new Promise((resolve, reject) => {
  //           (img as HTMLImageElement).onload = resolve;
  //           (img as HTMLImageElement).onerror = reject;
  //         })
  //     )
  //   );
  // }, []);

  useEffect(() => {
    const element = document.querySelector("[data-scroll-container]");
    const images = document.querySelectorAll(".gallery__item-imginner");
  
    if (element instanceof HTMLElement) {
      new LocomotiveScroll({
        el: element,
        smooth: true,
        direction: "horizontal",
      });
    }
  
    Array.from(images).forEach((img) => {
      (img as HTMLImageElement).onload = () => console.log("Image loaded");
      (img as HTMLImageElement).onerror = () => console.log("Image failed to load");
    });
  }, []);
  

  return (
    <div>
      <main data-scroll-container="">
        <div className="content">
          <div className="gallery">
            <figure className="gallery__item">
              <div className="gallery__item-img">
                <Image
                  className="gallery__item-imginner"
                  src="/1.jpg"
                  alt="Description of image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div />
              </div>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img">
                <Image
                  className="gallery__item-imginner"
                  src="/1.jpg"
                  alt="Description of image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div />
              </div>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img">
                <Image
                  className="gallery__item-imginner"
                  src="/1.jpg"
                  alt="Description of image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div />
              </div>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img">
                <Image
                  className="gallery__item-imginner"
                  src="/1.jpg"
                  alt="Description of image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div />
              </div>
            </figure>
          </div>  
        </div>
      </main>
    </div>
  );
}
