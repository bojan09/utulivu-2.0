import BackgroundVideo from "@/components/BackgroundVideo";
import Hero from "@/components/Hero";

// sections
import { Destinations, Testimonials, About, Contact } from "./index";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <BackgroundVideo />
      <Destinations />
      <Testimonials />
      <About />
      <Contact />
    </section>
  );
};

export default Home;
