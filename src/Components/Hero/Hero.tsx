import orange from "@/assets/orangeyellow.svg";
import BlueBall from "@/assets/blueblack.svg";
import And from "@/assets/and.png";
import Image from "next/image";
import Greenred from "@/assets/Blueyellow.svg";
import Yellow from "@/assets/orange.svg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 ">
      <div>
        <h1 className="flex  flex-col scroll-m-20 font-sans text-xl sm:text-4xl text-center font-bold sm:tracking-tight lg:text-7xl sm:mt-14 mb-28 leading-loose z-10">
          <p className="z-10 text-black">
            {/* Turning <span className="text-[#5baff6]">Dreams</span> into{" "}
          <span className="text-[#ff7a5c]">Reality</span>{" "} */}
            Turning Dreams into Reality
          </p>
          <p className="mx-auto sm:mt-2 w-6 h-6 shadow-sm">
            <Image className="" src={And} alt="&" width={50} height={50} />
          </p>
          <div className="z-50 text-black">
            {/* <span className="text-[#f5bde8]">Problems</span> into{" "}
          <span className="text-[#23a093]"> Solutions.</span> */}
            <p className="z-50 text-black">Problems into Solutions.</p>
          </div>
        </h1>
      </div>
      <div className="relative ">
        <Image
          className="absolute -top-52 w-16 h-16"
          src={orange}
          alt=""
          height={200}
          width={200}
          style={{ zIndex: 0 }} // Changed to 0
        />
        <Image
          className="absolute right-0 -top-52 w-16 h-16"
          src={BlueBall}
          alt=""
          height={200}
          width={200}
          style={{ zIndex: 2 }} // Changed to 2
        />
      </div>
    </section>
  );
};

export default Hero;
