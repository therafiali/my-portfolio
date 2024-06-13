import About from "@/Components/About/About";
import { ContactForm } from "@/Components/Contact/ContactForm";
import Form from "@/Components/Contact/Form";
import NavbarHeader from "@/Components/Navbar/Navbar";
import { BlackCard } from "@/Components/Projects/BlackCard";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import { ParallexSlider } from "@/Components/Slider/ParallexSlider";


const Home = () => {
  return (
    <>
      <main className="bg-image ">
        <ParallexSlider />
        <BlackCard/>
        {/* <About />
        <Skills />
        <Projects />
        <Form /> */}
        {/* <ContactForm/> */}
        <div className=" pt-20 mt-10"></div>
        <NavbarHeader />
      </main>
    </>
  );
};

export default Home;
