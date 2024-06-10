import orange from "@/assets/orangeyellow.svg";
import BlueBall from "@/assets/blueblack.svg";
import And from "@/assets/and.png";
import Image from "next/image";
import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/orange.svg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 relative overflow-hidden">
      <Image className="absolute  " src={orange} alt=""  height={200}
        width={200} />
      <Image
        className="absolute -right-10 "
        src={BlueBall}
        alt=""
        height={200}
        width={200}
      />

      <h1 className="flex  flex-col scroll-m-20 font-sans  text-4xl text-center font-bold tracking-tight lg:text-7xl mt-14 mb-28 leading-loose">
        <p>
          {/* Turning <span className="text-[#5baff6]">Dreams</span> into{" "}
          <span className="text-[#ff7a5c]">Reality</span>{" "} */}
          Turning Dreams into Reality
        </p>
        <p className="mx-auto mt-2">
          <Image className="" src={And} alt="&" width={50} height={50} />
        </p>
        <div>
          {/* <span className="text-[#f5bde8]">Problems</span> into{" "}
          <span className="text-[#23a093]"> Solutions.</span> */}
          <span>Problems into Solutions.</span>
        </div>
      </h1>
    </section>
  );
};

export default Hero;

