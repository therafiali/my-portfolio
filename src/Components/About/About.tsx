import Greenred from "@/assets/greenred.svg";
import Yellow from "@/assets/Yellow.png";
import Image from "next/image";

const About = () => {
  let about = `I'm a passionate developer who thrives on building smart solutions
across the digital landscape. Websites, tools, scripts, APIs, and even
generative AI-powered chatbots, I leverage cloud-native technologies to
create innovative platforms that adapt and grow. Let's collaborate on
your next digital adventure.`;
  return (
    <section id="about" className="mt-0 sm:pt-20 relative overflow-hidden sm:mt-14 sm:mb-28">
      <div className="hidden sm:flex">
        <Image className="absolute myDuration  " src={Greenred} alt="" />
        <Image
          className="absolute right-0 myDuration mt-10"
          src={Yellow}
          alt=""
          height={150}
          width={150}
        />
      </div>
      <h2 className="scroll-m-20  sm:text-4xl font-extrabold tracking-tight lg:text-5xl text-center ">About me</h2>
      <div className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 px-2 text-center sm:px-0 sm:text-2xl sm:text-justify font-medium tracking-widest lg:text-2xl  leading-relaxed">
        <p>{about}</p>
      </div>
    </section>
  );
};

export default About;
