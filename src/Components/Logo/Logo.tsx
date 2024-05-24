import Image from "next/image";
import logo from "@/assets/rafiali.png";
import logo1 from "@/assets/giphy.gif";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer border border-red-500">
      <Link href={'/'}>
      
        <Image
          className=" select-none rotate-[-60deg] scale-x-[-1] "
          src={logo1}
          width={200}
          height={100}
          alt="Rafi Ali"
        />
      </Link>
      <Link href={'/'}>
      
        <Image
          className=" select-none "
          src={logo}
          width={200}
          height={100}
          alt="Rafi Ali"
        />
      </Link>
    </div>
  );
};

export default Logo;
