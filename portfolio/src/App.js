import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/Pages/Projects";
import Home from "./components//Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  ); 
}

export default App;
