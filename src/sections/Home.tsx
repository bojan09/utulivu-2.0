import BackgroundVideo from "@/components/BackgroundVideo";
import Hero from "@/components/Hero";

// sections
import { Destinations, Testimonials, Faq, About, Contact } from "./index";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <BackgroundVideo />
      <Destinations />
      <Testimonials />
      <Faq />
      <About />
      <Contact />
    </section>
  );
};

export default Home;
