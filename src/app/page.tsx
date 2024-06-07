import About from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import NavbarHeader from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Porjects/Projects";
import Skills from "@/Components/Skills/Skills";
import Skillstree from "@/Components/Skills/Skillstree";
import SliderSection from "@/Components/Slider/SliderSection";

const Home = () => {
  return (
    <main className="bg-image">
      <Hero />
      <SliderSection />
      <About />
      <Skills/>
      <Skillstree/>
      <Projects/>
 
      <NavbarHeader />

    </main>
  );
};

export default Home;
