import Image from "next/image";
import logo from "@/assets/therafiali.svg";
import logo1 from "@/assets/giphy.gif";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="relative" href={"/"}>
      <div className="relative flex justify-center items-center cursor-pointer h-16 border border-red-500 w-44 mx-auto">
        <Image
          className=" absolute select-none "
          src={logo}
          width={150}
          height={150}
          alt="Rafi Ali"
        />

        <Image
          className="absolute left-[-78px] select-none rotate-[-60deg] scale-x-[-1] "
          src={logo1}
          width={100}
          height={100}
          alt="The"
        />
      </div>
    </Link>
  );
};

export default Logo;
