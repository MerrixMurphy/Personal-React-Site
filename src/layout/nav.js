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
              <img src={About} alt="Profile" title="Profile"/>
              <div style={{borderRadius: '0px 0px 0px 30px'}}>
            <h1>Profile</h1>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/personal-projects">
            <img src={Personal} alt="Personal Projects" title="Personal Projects"/>
            <div>
            <h1>Personal Projects</h1>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/home">
            <img src={Home} alt="Home" title="Home"/>
            <div>
            <h1>Home</h1>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/professional-projects">
            <img src={Professional} alt="Professional Projects" title="Professional Projects"/>
            <div>
            <h1>Professional Projects</h1>
            </div>
            </Link>
          </li>
          <li >
            <Link to="/contact">
            <img src={Contact} alt="Contact" title="Contact"/>
            <div style={{borderRadius: '0px 0px 30px 0px'}}>
            <h1>Contact</h1>
            </div>
            </Link>
          </li>
    </ul>
    </nav>
  );
}

export default Nav;
