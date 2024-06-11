import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/PYTHONMAN.svg";
import Image from "next/image";
import Skillstree from "./Skillstree";

const Skills = () => {
  return (
    <>
      <section id="skills" className="sm:pt-20 relative mt-16 sm:mt-14 ">
        
        <Image
          className="absolute top-32 sm:top-0 mt-20 w-16 h-16"
          src={Greenred}
          alt=""
        />
        <Image
          className="absolute right-0 top-[19rem] sm:top-0 mt-20 w-20 h-w-20"
          src={Yellow}
          alt=""
          height={300}
          width={300}
        />
        <h2 className="scroll-m-20  sm:text-4xl font-extrabold tracking-tight lg:text-5xl text-center ">Skills</h2>
        <div className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl  leading-relaxed ">
          <small className="mt-2 sm:mt-0 text-sm font-medium leading-none text-center">
            Jim Rohn said it
          </small>
          <div className="mx-auto mt-2 sm:mt-0 flex flex-col items-center text-lg text-center">
            <blockquote className="sm:mt-6 border-l-2 sm:pl-6 italic ">
              “Don&apos;t wish for less problems;
            </blockquote>
            <blockquote className="sm:mt-6 border-l-2 pl-6 italic ">
              wish for more skills.”
            </blockquote>
          </div>
        </div>
      </section>
      <Skillstree />
    </>
  );
};

export default Skills;
