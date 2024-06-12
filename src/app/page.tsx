import About from "@/Components/About/About";
import Form from "@/Components/Contact/Form";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import NavbarHeader from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import Skillstree from "@/Components/Skills/Skillstree";
import { ParallexSlider } from "@/Components/Slider/ParallexSlider";
import SliderSection from "@/Components/Slider/SliderSection";

const Home = () => {
  return (
    <>
      <main className="bg-image ">
<<<<<<< HEAD
        <ParallexSlider />
=======
        {/* <Hero /> */}
        <ParallexSlider />
        {/* <SliderSection /> */}
>>>>>>> 185523ee6da6f9b844e0ed38c157bbdc4918379a
        <About />
        <Skills />
        <Projects />
        <Form />
        <div className=" pt-20 mt-10"></div>
        <NavbarHeader />
      </main>
    </>
  );
};

export default Home;
