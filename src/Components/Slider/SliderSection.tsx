 "use client"
 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 import { useEffect } from "react";


 gsap.registerPlugin(ScrollTrigger);

 export default function SliderSection() {
   useEffect(()=>{
     const textWrappers = document.querySelectorAll(".your-text-wrapper-class")

     const pinTrigger = ScrollTrigger.create({
       trigger:".content-wrapper",
       pin: true,
       start: "top top",
       end: "+=200%",
     });

     let tl = gsap.timeline();
    
     tl.to(textWrappers,{
       x:"-300%",
       scrollTrigger:{
         start:() => pinTrigger?.start,
         end:() => pinTrigger?.end,
         scrub:2,
       }
     })

     return()=>{
       pinTrigger?.kill();
       tl.kill();
     }
   })
   return (
     <div className="content-wrapper  overflow-x-hidden">
     {/* Your component content */}
     <div className="your-text-wrapper-class flex justify-center items-center h-screen">
       {/* Your text content */}
       <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper transform translate-x-[70%] border border-red-500">
         A new way of designing, discovering and sharing
       </h1>
       <h1 className="text-vw font-bold text-black whitespace-nowrap text-wrapper transform translate-x-[70%] border border-red-500">
        rafi A new way of designing, discovering and sharing
       </h1>
     </div>
   </div>
   )
 }

