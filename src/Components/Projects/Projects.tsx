import Greenred from "@/assets/pinksqaure.svg";
import Yellow from "@/assets/yellowblack.svg";
import dine from "@/assets/dinemarket.png";
import first from "@/assets/first.png";
import portfolio from "@/assets/portfolio.png";
import todo from "@/assets/todo.png";
import panaverse from "@/assets/panaverse.png";
import gallery from "@/assets/gallery.png";
import chatbot from "@/assets/chatbot.jpg";
import fastapi from "@/assets/fastapi.jpg";
import email from "@/assets/email.jpg";
import autoresponder from "@/assets/autoresponder.jpg";
import Image from "next/image";
import { Card } from "./Card";
import Link from "next/link";
import { BlackCard } from "./BlackCard";
import { Trophy } from "lucide-react";
import { Projecttext } from "./Projecttext";

const Projects = () => {
  return (
    <div>
      <section id="portfolio" className="md:pt-20 relative overflow-hidden">
        <Image
          className="absolute hidden xs:block  w-20 h-20 xs:w-0 xs:h-0 "
          src={Greenred}
          alt=""
        />
        <Image
          className="absolute right-0 hidden xs:block  w-20 h-20 xs:w-0 xs:h-0 "
          src={Yellow}
          alt=""
        />
        <div className=" py-8 text-center">
          <button className="btn text-center shade  ">
            Projects
            <div className="">
            <Trophy />
            </div>
          </button>
        </div>
        <h2 className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl sm:mt-14  sm:mb-28 leading-relaxed">
          <small className="mt-2 sm:mt-0 px-2 sm:px-0 font-sans text-sm font-medium leading-none text-center">
            A portfolio is more than a collection of projects,
          </small>
          <div className="mx-auto mt-4 sm:mt-0 flex flex-col items-center text-lg max-w-sm ">
            <blockquote className="sm:mt-6 border-l-2 sm:pl-6 italic text-center">
              <span className="flex justify-start text-4xl text-yellow-400 font-serif text-start w-full">
                “
              </span>{" "}
              <p>
               <Projecttext/>
              </p>
              <span className="flex justify-end text-4xl text-yellow-400 font-serif text-end">
                {" "}
                ”
              </span>
            </blockquote>
          </div>
        </h2>
      </section>
      <BlackCard />
    </div>
  );
};

export default Projects;
