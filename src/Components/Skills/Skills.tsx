import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/PYTHONMAN.svg";
import Image from "next/image";
import Skillstree from "./Skillstree";
import { PencilRuler } from "lucide-react";

const Skills = () => {
  return (
    <>
      <section id="skills" className=" mt-16 sm:mt-14 ">
        
      
        <div className=" py-8 text-center" >
          <button className="btn text-center shade  ">
            Skills
            <div className="">
            <PencilRuler />
            </div>
          </button>
        </div>
        <div className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl  leading-relaxed p-4">
          <small className="mt-2 sm:mt-0 text-sm font-medium leading-none text-center">
            Jim Rohn said it
          </small>
          <div className="mx-auto mt-2 sm:mt-0 flex flex-col items-center text-lg text-center max-w-sm">
            {/* <blockquote className="sm:mt-6 border-l-2 sm:pl-6 italic ">
              “Don&apos;t wish for less problems;
            </blockquote>
            <blockquote className="sm:mt-6 border-l-2 pl-6 italic ">
              wish for more skills.”
            </blockquote> */}
            <blockquote className="sm:mt-6 border-l-2 sm:pl-6 italic text-center">
              <span className="flex justify-start text-4xl text-yellow-400 font-serif text-start w-full">“</span>{" "}
              <p>
              Don&apos;t wish for less problems;
              wish for more skills.
              </p>
              <span className="flex justify-end text-4xl text-yellow-400 font-serif text-end"> ”</span>
            </blockquote>
          </div>
        </div>
      </section>
      <Skillstree />
    </>
  );
};

export default Skills;
