import About from "@/Components/About/About";
import { ContactForm } from "@/Components/Contact/ContactForm";
import Form from "@/Components/Contact/Form";
import NavbarHeader from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import { ParallexSlider } from "@/Components/Slider/ParallexSlider";

const Home = () => {
  return (
    <>
      <main className="bg-image ">
        <ParallexSlider />
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
