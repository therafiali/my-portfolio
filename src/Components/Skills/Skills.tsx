import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/PYTHONMAN.svg";
import Image from "next/image";
import Skillstree from "./Skillstree";

const Skills = () => {
  return (
    <>
      <section id="skills" className="pt-20 relative">
        <Image
          className="absolute myDuration mt-20"
          src={Greenred}
          alt=""
        />
        <Image
          className="absolute right-0 myDuration mt-20"
          src={Yellow}
          alt=""
          height={300}
          width={300}
        />
        <h2 className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl mt-14  leading-relaxed">
          <small className="text-sm font-medium leading-none text-center">
            Jim Rohn said it
          </small>
          <div className="mx-auto flex flex-col items-center">
            <blockquote className="mt-6 border-l-2 pl-6 italic ">
              “Don&apos;t wish for less problems;
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic ">
              wish for more skills.”
            </blockquote>
          </div>
        </h2>
      </section>
      <Skillstree />
    </>
  );
};

export default Skills;
