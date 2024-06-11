import About from "@/Components/About/About";
import Form from "@/Components/Contact/Form";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import NavbarHeader from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import Skillstree from "@/Components/Skills/Skillstree";
import SliderSection from "@/Components/Slider/SliderSection";

const Home = () => {
  return (
    <>
      <main className="bg-image">
        <Hero />
        <SliderSection />
        <About />
        <Skills />
        <Projects />
        <Form />
        <div className="pt-20 mt-10"></div>
        <NavbarHeader />
      </main>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;
