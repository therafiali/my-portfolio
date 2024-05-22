import NavbarHeader from "@/Components/Navbar/Navbar";

const Home = () => {
  return (
    <main className="bg-image">
      <section id="home">Home</section>
      <section id="about">About</section>
      <section id="services">Services</section>
      <section id="portfolio">Portfolio</section>
      <section id="contact">Contact</section>
      <NavbarHeader />
    </main>
  );
};

export default Home;
