import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import About from "../../pages/About/About";
import Contact from "../Contact";
import Footer from "../Footer";
import Portfolio from "../../pages/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        {/*  <Router>
        //<div>
        //<NavBar /> 
          //<Route exact path="/"> component= {About} </Route>
         // <Route path="/about"> component= {About} </Route>
          //<Route path="/portfolio"> component= {Portfolio} </Route>
         //<Route path="/contact"> component= {Contact} </Route>
         // <Footer /> 
         // </div>
         //</Router> */}
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
