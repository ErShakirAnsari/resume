import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";

// import logo from "./logo.svg";
// import style from "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
