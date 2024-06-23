"use client";
import Image from "next/image";
import React from "react";
import GreenBlack from "@/assets/greenblack.svg";
import pink from "@/assets/pinkyellow.svg";
import blue from "@/assets/skyblue.svg";
import line from "@/assets/roundline.svg";
import { useEffect } from "react";
import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@nextui-org/react";
import { ContactForm } from "./ContactForm";
import { Contacthighlight } from "./Contacthighlight";
import Link from "next/link";

const MyComponent = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc(event: Event) {
      let target = event.target as HTMLInputElement;
      let parent = target.parentNode;
      if (parent && parent instanceof HTMLElement) {
        parent.classList.add("focus");
      }
    }

    function blurFunc(event: Event) {
      let target = event.target as HTMLInputElement;
      let parent = target.parentNode;
      if (parent && parent instanceof HTMLElement) {
        if (target.value == "") {
          parent.classList.remove("focus");
        }
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc as EventListener);
      input.addEventListener("blur", blurFunc as EventListener);
    });

    // Cleanup listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc as EventListener);
        input.removeEventListener("blur", blurFunc as EventListener);
      });
    };
  }, []);
  return null;
  // ... rest of your component
};

const Form = () => {
  return (
    <>
      <MyComponent />
      <div className="relative overflow-hidden mt-10 mx-auto   ">
        <Image
          className="absolute  hidden sm:block  left-0 top-10 myDuration animate-bounce "
          src={blue}
          alt=""
        />
        <Image
          className="absolute  hidden sm:block  right-0 top-14 myDuration animate-bounce "
          src={pink}
          alt=""
          height={150}
          width={150}
        />
        <div className="form flex justify-center items-center flex-col nine:flex-row w-full h-full mx-auto px-4 sm:px-0 ">
          <div  className="pricing__left flx w-full min-h-[300px]  ">
            <div id="" className="title">
              Let&apos;s get in touch
            </div>
            <Image className="image-79" src={GreenBlack} alt="" />
            <p className="text-white z-10  max-w-[18rem] nine:mt-4">
              Fill out the form below or shoot me an email at{" "}
              <Contacthighlight />
            </p>
            <div id="" className="info nine:mt-16">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p>Karachi, Pakistan</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>therafiali@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>+923190269909</p>
              </div>
              <div className="flex gap-x-5 items-center">
                <div className="bg-emerald-500  rounded-full flex flex-col items-center justify-center ml-2 mt-1">
                  <p className="bg-[#1abc9c] w-3 h-3 rounded-full animate-ping  "></p>
                </div>
                <p className="text-xs text-white mt-1">Available Now</p>
              </div>
            </div>
            <div className="social-media mt-8">
              <p className="text-white">Connect with us :</p>
              <div className="flex gap-2 nine:mt-2">
                <Link target="_blank" href={"https://www.linkedin.com/in/therafiali/"} >
                <Linkedin
                  className="bg-custom-gradient p-1 rounded-sm cursor-pointer "
                  color="white"
                  size={30}
                /></Link>
                <Link target="_blank" href={"https://github.com/therafiali"} >
                <Github
                  className="bg-custom-gradient p-1 rounded-sm cursor-pointer "
                  color="white"
                  size={30}
                />
                </Link>
                <Link target="_blank" href={"https://twitter.com/therafiali"} >
                <Twitter
                  className="bg-custom-gradient p-1 rounded-sm cursor-pointer"
                  color="white"
                  size={30}
                />
                </Link>
                <Link target="_blank" href={"https://www.facebook.com/therafiali/"} >
                <Facebook
                  className="bg-custom-gradient p-1 rounded-sm cursor-pointer"
                  color="white"
                  size={30}
                />
                </Link>
                <Link target="_blank" href={"https://www.youtube.com/@therafiali"} >
                <Youtube 
                  className="bg-custom-gradient p-1 rounded-sm cursor-pointer"
                  color="white"
                  size={30}
                />
                </Link>
              </div>
            </div>
          </div>
          <div className="flx w-full min-h-[300px] ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
