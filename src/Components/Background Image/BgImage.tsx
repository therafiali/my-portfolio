import background from "@/assets/bg image.svg";
import backgroundcover from "@/assets/bg gradient.png";
import Image from "next/image";
const BgImage = () => {
  return (
    <div className="relative bg-image -z-10 w-full">
        <div className="bg-[#f6f2ea] opacity-10 border">
          <Image
            src={backgroundcover}
            className="w-full"
            width={1000}
            height={1000}
            alt="BG Image"
          />
        </div>
      </div>
  )
}

export default BgImage