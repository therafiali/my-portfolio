import Image from "next/image";
import logo from "@/assets/rafiali logo.gif";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <Link href={'/'}>
      
        <Image
          className=" select-none"
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
