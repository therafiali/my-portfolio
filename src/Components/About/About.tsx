import Greenred from "@/assets/greenred.svg";
import Yellow from "@/assets/Yellow.png";
import Image from "next/image";
import Bio from "./Bio";
import { AboutText } from "./AboutText";

const About = () => {
  let about = `I'm a passionate developer who thrives on building smart solutions
across the digital landscape. Websites, tools, scripts, APIs, and even
generative AI-powered chatbots, I leverage cloud-native technologies to
create innovative platforms that adapt and grow. Let's collaborate on
your next digital adventure.`;
  return (
    <section id="about" className="mt-0 sm: relative overflow-hidden   ">
      <div className="hidden sm:flex  ">
        <Image className="absolute top-0 myDuration  " src={Greenred} alt="" />
        <Image
          className="absolute right-0 myDuration mt-10"
          src={Yellow}
          alt=""
          height={150}
          width={150}
        />
      </div>

      <div className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 px-2 text-center sm:px-0 sm:text-2xl sm:text-justify font-medium tracking-widest lg:text-2xl  leading-relaxed mt-16">
        <div className="mx-auto py-8">
          <button className="btn text-center shade ">
            About me
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
        <p className="sm:text-xl px-2 text-center z-20 py-2">
          <AboutText />
        </p>
      </div>
      <div className="mt-4 sm:mt-8">
        <Bio />
      </div>
    </section>
  );
};

export default About;
