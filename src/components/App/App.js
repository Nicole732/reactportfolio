import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home";
import NavBar from "../NavBar";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer"

const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"> component= {Home} </Route>
        <Route path="/about"> component= {About} </Route>
        <Route path="/portfolio"> component= {Portfolio} </Route>
        <Route path="/contact"> component= {Contact} </Route>
        <Footer />
      </div>

    </Router>
  );
};

export default App;
