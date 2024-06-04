import About from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import NavbarHeader from "@/Components/Navbar/Navbar";
import Skills from "@/Components/Skills/Skills";
import SliderSection from "@/Components/Slider/SliderSection";

const Home = () => {
  return (
    <main className="bg-image">
      <Hero />
      <SliderSection />
      <About />
      <Skills/>
      <NavbarHeader />
    </main>
  );
};

export default Home;
