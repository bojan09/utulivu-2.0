import { Routes, Route } from "react-router-dom";

import {
  Home,
  Destinations,
  Testimonials,
  About,
  Contact,
  Footer,
} from "./sections";
import { Navbar, DestinationDetail } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Destinations />
      <Routes>
        <Route path="/destinations/:id" element={<DestinationDetail />} />
      </Routes>
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
