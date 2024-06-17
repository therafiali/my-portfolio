import About from "@/Components/About/About";
import Bio from "@/Components/About/Bio";
import { ContactForm } from "@/Components/Contact/ContactForm";
import { Contacthighlight } from "@/Components/Contact/Contacthighlight";
import Form from "@/Components/Contact/Form";
import NavbarHeader from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import { ParallexSlider } from "@/Components/Slider/ParallexSlider";
import { ToasterApp } from "@/Components/ui/toaster";


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
