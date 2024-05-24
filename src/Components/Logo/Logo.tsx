import Image from "next/image";
import logo from "@/assets/therafiali.svg";
import logo1 from "@/assets/giphy.gif";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer h-16">
      <Link href={"/"}>
        <Image
          className=" select-none rotate-[-60deg] scale-x-[-1] "
          src={logo1}
          width={100}
          height={100}
          alt="Rafi Ali"
        />
      </Link>
      <Link href={"/"}>
        <Image
          className=" select-none "
          src={logo}
          width={150}
          height={150}
          alt="Rafi Ali"
        />
      </Link>
    </div>
  );
};

export default Logo;
