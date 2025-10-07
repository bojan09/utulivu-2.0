import {
  Home,
  Destinations,
  Testimonials,
  About,
  Contact,
  Footer,
} from "./sections";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Destinations />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
