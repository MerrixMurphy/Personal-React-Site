import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./images/about.png";
import Contact from "./images/contact.png";
import Personal from "./images/personal.png";
import Professional from "./images/professional.png";
import Home from "./images/home.png";
import Expanded from "./images/expanded.png";
import Unexpanded from "./images/unexpanded.png";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(null);
  let currentURL = window.location.pathname;
  if (currentURL === "/") {
    currentURL = "/home";
  }
  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, []);

  const navOptions = [
    {
      name: "Profile",
      id: "profileNav",
      to: "/about",
      img: About,
    },
    {
      name: "Personal Projects",
      id: "personalNav",
      to: "/personal-projects",
      img: Personal,
    },
    {
      name: "Home",
      id: "homeNav",
      to: "/home",
      img: Home,
    },
    {
      name: "Professional Projects",
      id: "professionalNav",
      to: "/professional-projects",
      img: Professional,
    },
    {
      name: "Contact",
      id: "contactNav",
      to: "/contact",
      img: Contact,
    },
  ];

  const currentNav = navOptions.find((nav) => nav.to === currentURL);

  let selectedNav = isExpanded ? navOptions : [currentNav];

  return (
    <nav>
      <ul
        style={{
          flexDirection:
            isExpanded && window.innerWidth < 600 ? "column-reverse" : "",
        }}
      >
        {selectedNav.map((option) => (
          <li
            key={option.name}
            id={option.id}
            style={{ display: isExpanded ? "inline" : "" }}
            onClick={() =>
              window.innerWidth < 600 ? setIsExpanded(false) : null
            }
          >
            <Link to={option.to}>
              <img src={option.img} alt={option.name} />
              <div
                style={{
                  borderRadius:
                    isExpanded && window.innerWidth < 600
                      ? "0px 0px 0px 0px"
                      : "",
                }}
              >
                <h1>{option.name}</h1>
              </div>
            </Link>
          </li>
        ))}
        <li
          id="ExpandMenu"
          onClick={() => setIsExpanded(isExpanded ? false : true)}
        >
          <img
            src={isExpanded ? Expanded : Unexpanded}
            alt="Expand Menu"
            title="Expand Menu"
          />
          <div style={{ borderRadius: isExpanded ? "0px 0px 30px 30px" : "" }}>
            <h1>{isExpanded ? "Minimize" : "Expand"}</h1>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
