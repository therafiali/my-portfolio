import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/greenred.svg";
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


const Projects = () => {
  return (
    <div>
      <section id="portfolio" className="pt-20 relative overflow-hidden">
        <Image
          className="absolute myDuration animate-bounce"
          src={Greenred}
          alt=""
        />
        <Image
          className="absolute right-0 myDuration animate-bounce"
          src={Yellow}
          alt=""
          height={150}
          width={150}
        />
        <h2 className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl mt-14 mb-28 leading-relaxed">
          <small className="text-sm font-medium leading-none text-center">
            A portfolio is more than a collection of projects,
          </small>
          <div className="mx-auto flex flex-col items-center">
            <blockquote className="mt-6 border-l-2 pl-6 italic ">
              “ it&apos;s a showcase of progress, what you&apos;ve learned,
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic ">
              and your plans for what comes next.”
            </blockquote>
          </div>
        </h2>
      </section>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
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
              title="Email Scraper - Python Selenium"
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
      </div>
    </div>
  );
};

export default Projects;
