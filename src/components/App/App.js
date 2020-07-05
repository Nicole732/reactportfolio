import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar/index";
import Homepage from '../../pages/Homepage';
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Footer from "../Footer";
import Portfolio from "../../pages/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div>
         <Router>
         <div>
          <NavBar />
          <Route exact path="/" component={Homepage} />       
          <Route exact path="/about"  component={About} />  
          <Route exact path="/portfolio" component={Portfolio} />  
         <Route exact path="/contact" component={Contact} /> 
          {/* <Footer /> */}
          </div>
          </Router> 
         {/* <Homepage />
          <About />
         <Portfolio /> */}
      
    </div>
    );
  }
}

export default App;
