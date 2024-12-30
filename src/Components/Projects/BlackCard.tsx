import { HoverEffect } from "../ui/card-hover-effect";
import dine from "@/assets/dinemarket.png";
import first from "@/assets/first.png";
import portfolio from "@/assets/portfolio.png";
import todo from "@/assets/todo.png";
import panaverse from "@/assets/panaverse.png";
import gallery from "@/assets/gallery.png";
import chatbot from "@/assets/chatbot.jpg";
import fastapi from "@/assets/fastapi.jpg";
import mining from "@/assets/dashboard.png";
import YourMunshi from "@/assets/yourmunshi.jpeg";
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
    image: YourMunshi,
    title: "Landing Page (AI STARTUP)",

    link: "https://yourmunshi.net/",
    skills: [
      "Nextjs",
      "React",
      "Javasript",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    code: "/",
  },
  {
    image: mining,
    title: "Multi User Management Dashboard",

    link: "/",
    skills: [
      "Nextjs",
      "React",
      "Javasript",
      "Tailwind CSS",
      'FASTAPI',
      'MUI Library',
      'MongoDB'
    ],
    code: "https://github.com/therafiali/Multi-Users-Management-Dashboard-UI"
    // ",
  },
  {
    image: dine,
    title: "Ecommerce Web App",

    link: "https://full-stack-ecommerce-clothing-web.vercel.app/",
    skills: [
      "Nextjs",
      "React",
      "Javasript",
      "Typescript",
      "Redux",
      "Sanity",
      "Stipe",
      "Tailwind CSS",
      "Drizzle ORM",
    ],
    code: "https://github.com/therafiali/Full_Stack_ecommerce_project-01",
  },
  {
    image: first,
    title: "Simple Portfolio Web",

    link: "https://first-portfolio-three.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript", "Tailwind CSS"],
    code: "https://github.com/therafiali/first_portfolio",
  },
  {
    image: portfolio,
    title: "Portfolio Web",

    link: "https://rafiali.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript", "Tailwind CSS"],
    code: "https://github.com/therafiali/My_Portfolio",
  },
  {
    image: todo,
    title: "Todo App",

    link: "https://todo-app-one-black.vercel.app/",
    skills: [
      "Nextjs",
      "React",
      "Javasript",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    code: "https://github.com/therafiali/Todo-app",
  },
  {
    image: gallery,
    title: "Image Gallery App using Cloudinary API",

    link: "https://image-gallery-app-gamma.vercel.app/gallery",
    skills: ["Nextjs", "React", "Javasript", "Typescript", "Tailwind CSS"],
    code: "https://github.com/therafiali/images_gallery_project",
  },
  {
    image: panaverse,
    title: "Panaverse Simple web app",

    link: "https://panaverse-clone-theta.vercel.app/",
    skills: ["Nextjs", "React", "Javasript", "Typescript", "Tailwind CSS"],
    code: "https://github.com/therafiali/Panaverse-web-app",
  },
  {
    image: chatbot,
    title: "OpenAI Based BookStore Chatbot",

    link: "http://bit.ly/therafialigenerativeai",
    skills: ["Python", "OpenAI API", "Simple Book API", "Streamlit"],
    code: "https://github.com/therafiali/Chatbot_with_Simple_Book_Api",
  },
  {
    image: fastapi,
    title: "Crud Operations in FASTAPI - Python",

    link: "https://bit.ly/therafialiapi",
    skills: ["Python", "Fastapi", "SQl Alchemy", "Streamlit", "PostgreSQL"],
    code: "https://github.com/therafiali/Todo_RestAPI_using_FastAPI",
  },
  {
    image: email,
    title: "Email Scraper for Email Marketing - Python Selenium",

    link: "https://bit.ly/therafialiapi",
    skills: ["Python", "Selinium"],
    code: "https://github.com/therafiali",
  },
  {
    image: autoresponder,
    title: "Whatsapp Autoresponder for Server Monitoring - Python",

    link: "https://www.youtube.com/shorts/KzrXvj7wBsQ",
    skills: ["Python", "Selinium"],
    code: "https://github.com/therafiali",
  },
];
