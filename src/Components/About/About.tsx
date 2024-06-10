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
    <section id="about" className="pt-20 relative overflow-hidden">
      <Image
        className="absolute myDuration "
        src={Greenred}
        alt=""
      />
      <Image
        className="absolute right-0 myDuration mt-10"
        src={Yellow}
        alt=""
        height={150}
        width={150}
      />
      <h2 className="flex  flex-col max-w-screen-md from-accent-foreground mx-auto scroll-m-20 text-2xl text-justify font-medium tracking-widest lg:text-2xl mt-14 mb-28 leading-relaxed">
        <p>{about}</p>
      </h2>
    </section>
  );
};

export default About;
