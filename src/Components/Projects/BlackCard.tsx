import { HoverEffect } from "../ui/card-hover-effect";
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

export function BlackCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: dine,
    title: "Ecommerce Web App",

    link: "https://full-stack-ecommerce-clothing-web.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: first,
    title: "Simple Portfolio Web",

    link: "https://first-portfolio-three.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: portfolio,
    title: "Portfolio Web",

    link: "https://therafiali.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: todo,
    title: "Todo App",

    link: "https://todo-app-one-black.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: gallery,
    title: "Image Gallery App using Cloudinary API",

    link: "https://image-gallery-app-gamma.vercel.app/gallery",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: panaverse,
    title: "Panaverse Simple web app",

    link: "https://panaverse-clone-theta.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: chatbot,
    title: "OpenAI Based BookStore Chatbot",

    link: "http://bit.ly/therafialigenerativeai",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: fastapi,
    title: "Crud Operations in FASTAPI - Python",

    link: "https://bit.ly/therafialiapi",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: email,
    title: "Email Scraper for Email Marketing - Python Selenium",

    link: "https://bit.ly/therafialiapi",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
  {
    image: autoresponder,
    title: "Whatsapp Autoresponder for Server Monitoring - Python",

    link: "https://www.youtube.com/shorts/KzrXvj7wBsQ",
    skills: ["Nextjs", "React", "Javasript", "Typescript"],
    code: "",
  },
];
