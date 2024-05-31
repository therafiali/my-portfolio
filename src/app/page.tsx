 import Hero from "@/Components/Hero/Hero";
 import NavbarHeader from "@/Components/Navbar/Navbar";
 import Slider from "@/Components/Slider/Slider";
 import SliderSection from "@/Components/Slider/SliderSection";

 const Home = () => {
   return (
     <main className="bg-image">
       <Hero />
       <SliderSection />
       <Hero />
       {/* <Hero /> */}
       <NavbarHeader />
     </main>
   );
 };

 export default Home;
