import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Portfolio from "../Portfolio";

function App () {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"> component= {About} </Route>
        <Route path="/about"> component= {About} </Route>
        <Route path="/portfolio"> component= {Portfolio} </Route>
        <Route path="/contact"> component= {Contact} </Route>
        <Footer />
      </div>

    </Router>
  );
};

export default App;
