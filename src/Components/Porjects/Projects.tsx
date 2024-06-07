import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/orange.svg";
import Image from "next/image";
import { Card } from "./Card";

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
              “ it’s a showcase of progress, what you’ve learned,
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic ">
              and your plans for what comes next.”
            </blockquote>
          </div>
        </h2>
      </section>
      <div className="grid grid-cols-2">
        <div className="col-span-1" >
          <Card src={Yellow} title="hi" />
        </div>
        <div className="col-span-1" >
          <Card src={Yellow} title="hi" />
        </div>
        <div className="col-span-1" >
          <Card src={Yellow} title="hi" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
