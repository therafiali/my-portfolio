"use client";
import Image from "next/image";
import React from "react";
import GreenBlack from "@/assets/greenblack.svg";
import pink from "@/assets/pinkyellow.svg";
import blue from "@/assets/skyblue.svg";
import line from "@/assets/roundline.svg";
import { useEffect } from "react";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@nextui-org/react";

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
  let server = process.env.formKey;
  return (
    <>
      <MyComponent />
      <section id="contact" className="relative overflow-hidden mt-10 ">
        <Image
          className="absolute  hidden xs:block  left-0 top-10 myDuration animate-bounce "
          src={blue}
          alt=""
        />
        <Image
          className="absolute  hidden xs:block  right-0 top-14 myDuration animate-bounce "
          src={pink}
          alt=""
          height={150}
          width={150}
        />
        {/* <span className="big-circle" />
        <img src="img/shape.png" className="square" alt="" /> */}
        <div className="form flex flex-col sm:flex-row w-full mx-auto ">
          <div className="pricing__left flex-1">
            <h3 className="title">Let&apos;s get in touch</h3>
            <Image className="image-79" src={GreenBlack} alt="" />
            <p className="text-white z-10 max-w-[18rem]">
              Fill out the form below or shoot me an email at{" "}
              <span className="text-teal-300" >therafiali@gmail.com</span>
            </p>
            <div className="info">
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
            <div className="social-media">
              <p className="text-white">Connect with us :</p>
              <div className="flex gap-2 mt-2">
                <Linkedin
                  className="bg-custom-gradient p-1 rounded-sm "
                  color="white"
                  size={30}
                />
                <Github
                  className="bg-custom-gradient p-1 rounded-sm "
                  color="white"
                  size={30}
                />
                <Twitter
                  className="bg-custom-gradient p-1 rounded-sm"
                  color="white"
                  size={30}
                />
                <Facebook
                  className="bg-custom-gradient p-1 rounded-sm"
                  color="white"
                  size={30}
                />
              </div>
            </div>
          </div>
          <div className="contact-form flex-1">
            <form action={server} autoComplete="off" method="POST">
              <h3 className=" text-black">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input 
                " />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea ">
                <textarea name="message" className="input" defaultValue={""} />
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <div className="buttonjoy">
                <Button
                  type="submit"
                  className="text-white  w-full h-full text-center text-xl"
                >
                  Drop a message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
