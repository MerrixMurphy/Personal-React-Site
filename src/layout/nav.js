import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <ul>
    <li >
            <Link to="/home">
              <span  />
              &nbsp;Home
            </Link>
          </li>
          <li >
            <Link to="/about">
              <span  />
              &nbsp;About
            </Link>
          </li>
          <li >
            <Link to="/personal-projects">
              <span  />
              &nbsp;Personal
            </Link>
          </li>
          <li >
            <Link to="/professional-projects">
              <span  />
              &nbsp;Professional
            </Link>
          </li>
    </ul>
    </nav>
  );
}

export default Nav;
