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

const Projects = () => {
  return (
    <div>
      <section id="portfolio" className="sm:pt-20 relative overflow-hidden">
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
          <button className="btn text-center  ">
            Projects
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </button>
        </div>
        <h2 className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl sm:mt-14  sm:mb-28 leading-relaxed">
          <small className="mt-2 sm:mt-0 px-2 sm:px-0 font-sans text-sm font-medium leading-none text-center">
            A portfolio is more than a collection of projects,
          </small>
          <div className="mx-auto mt-4 sm:mt-0 flex flex-col items-center text-lg max-w-sm ">
            <blockquote className="sm:mt-6 border-l-2 sm:pl-6 italic text-center">
              <span className="text-4xl text-yellow-400 font-serif">“</span>{" "}
              it&apos;s a showcase of progress, what you&apos;ve learned,
            </blockquote>
            <blockquote className="sm:mt-6 border-l-2 sm:pl-6 italic text-center">
              and your plans for what comes next.{" "}
              <span className="text-4xl text-yellow-400 font-serif"> ”</span>
            </blockquote>
          </div>
        </h2>
      </section>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-0 ">
        <div className="col-span-1 ">
          <Link
            target="_blank"
            href={"https://full-stack-ecommerce-clothing-web.vercel.app/"}
          >
            <Card
              src={dine}
              title="Ecommerce Web App"
              link="https://full-stack-ecommerce-clothing-web.vercel.app/"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link
            target="_blank"
            href={"https://first-portfolio-three.vercel.app/"}
          >
            <Card
              src={first}
              title="Simple Portfolio Web"
              link="https://first-portfolio-three.vercel.app/"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link target="_blank" href={"https://therafiali.vercel.app/"}>
            <Card
              src={portfolio}
              title="Portfolio Web"
              link="https://therafiali.vercel.app/"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link target="_blank" href={"https://todo-app-one-black.vercel.app/"}>
            <Card
              src={todo}
              title="Todo App"
              link="https://todo-app-one-black.vercel.app/"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link
            target="_blank"
            href={"https://image-gallery-app-gamma.vercel.app/gallery"}
          >
            <Card
              src={gallery}
              title="Image Gallery App using Cloudinary API"
              link="https://image-gallery-app-gamma.vercel.app/gallery"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link
            target="_blank"
            href={"https://panaverse-clone-theta.vercel.app/"}
          >
            <Card
              src={panaverse}
              title="Panaverse Simple web app"
              link="https://panaverse-clone-theta.vercel.app/"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link target="_blank" href={"http://bit.ly/therafialigenerativeai"}>
            <Card
              src={chatbot}
              title="OpenAI Based BookStore Chatbot"
              link="http://bit.ly/therafialigenerativeai"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link target="_blank" href={"https://bit.ly/therafialiapi"}>
            <Card
              src={fastapi}
              title="Crud Operations in FASTAPI - Python"
              link="https://bit.ly/therafialiapi"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=pRZ7LQUKjxY"}
          >
            <Card
              src={email}
              title="Email Scraper for Email Marketing - Python Selenium"
              link="https://bit.ly/therafialiscripts"
            />
          </Link>
        </div>
        <div className="col-span-1">
          <Link
            target="_blank"
            href={"https://www.youtube.com/shorts/KzrXvj7wBsQ"}
          >
            <Card
              src={autoresponder}
              title="Whatsapp Autoresponder for Server Monitoring - Python"
              link="https://bit.ly/therafialiscripts"
            />
          </Link>
        </div>
      </div> */}
      <BlackCard/>
    </div>
  );
};

export default Projects;
