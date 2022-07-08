import React from "react";
import { Link } from 'react-router-dom';
import About from "./images/about.png"
import Contact from "./images/contact.png"
import Personal from "./images/personal.png"
import Professional from "./images/professional.png"
import Home from "./images/home.png"

function Nav() {
  return (
    <nav>
    <ul>
          <li >
            <Link to="/about">
              <img src={About} alt="Profile" title="Profile" className="navIcon"/>
              <div className="hover_viewer curve_left">
            <div className="nav_option">Profile</div>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/personal-projects">
            <img src={Personal} alt="Personal Projects" title="Personal Projects" className="navIcon"/>
            <div className="hover_viewer">
            <div className="nav_option">Personal Projects</div>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/home">
            <img src={Home} alt="Home" title="Home" className="navIcon"/>
            <div className="hover_viewer">
            <div className="nav_option">Home</div>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/professional-projects">
            <img src={Professional} alt="Professional Projects" title="Professional Projects" className="navIcon"/>
            <div className="hover_viewer">
            <div className="nav_option">Professional Projects</div>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/contact">
            <img src={Contact} alt="Contact" title="Contact" className="navIcon"/>
            <div className="hover_viewer curve_right">
            <div className="nav_option">Contact</div>
            </div>
            </Link>
          </li>
    </ul>
    </nav>
  );
}

export default Nav;
