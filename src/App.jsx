import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css"; // AOS styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import AOS from "aos";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* Define all your routes here */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* Catch-all route for undefined paths */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
