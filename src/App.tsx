import { Routes, Route } from "react-router-dom";

import { Home, Contact, Footer } from "./sections";

import { Navbar, DestinationDetail, ScrollToTop } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route
            path="*"
            element={
              <div className="container mx-auto p-8">404 - Page Not Found</div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
