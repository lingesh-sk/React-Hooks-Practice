import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Navs from "./navbar";
import Service from "./service";

function Routing() {
  return (
    <div>
      <Router>
        <Navs />
        <Routes>
          <Route path="/" element={<h1>This is Landing page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Oops 404 Error Occur!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
