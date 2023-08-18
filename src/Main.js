import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Findus from "./Findus";
import Ourwork from "./Work";


class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Hometown Paint & Body</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/findus">Find Us</NavLink></li>
            <li><NavLink to="/work">Our Work</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
             <Route exact path="/" element={<Home />}/>
             <Route path="/findus" element={<Findus />}/>
             <Route path="/Work" element={<Ourwork />}/>
             <Route path="/Contact" element={<Contact />} />
             <Route path="/Testimonials" element={<Testimonials />}/>
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;