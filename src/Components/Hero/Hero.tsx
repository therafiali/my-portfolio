import Green from "@/assets/GREEN-LINE.svg";
import BlueBall from "@/assets/BLUE-BALL.svg";
import And from "@/assets/and.png";
import Image from "next/image";

const Hero = () => {
  return (

    <section id="home" className="pt-20 relative overflow-hidden">
      <Image className="absolute left-[-13.75rem]" src={Green} alt="" />
      <Image className="absolute right-[-4.75rem]" src={BlueBall} alt="" />
      <h1 className="flex  flex-col scroll-m-20  text-4xl text-center font-extrabold tracking-normal lg:text-6xl mt-14 mb-28 leading-relaxed">
        <p>
          Turning <span className="text-[#5baff6]">Dreams</span> into{" "}
          <span className="text-[#ff7a5c]">Reality</span>{" "}
        </p>
        <p className="mx-auto">
          <Image
            className=""
            src={And}
            alt="&"
            width={50}
            height={50}
          />
        </p>
        <div>
          <span className="text-[#f5bde8]">Problems</span> into{" "}
          <span className="text-[#23a093]"> Solutions.</span>
        </div>
      </h1>
    </section>
  );
};

export default Hero;
