import Home from "./sections/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
