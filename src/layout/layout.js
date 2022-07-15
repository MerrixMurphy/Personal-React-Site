import React from "react";
import Nav from "./nav";
import Routes from "./routes";

import "./layout.css";

function Layout() {
  return (
    <div>
      <Nav />
      <div className="center">
      <Routes />
      </div>
    </div>
  );
}

export default Layout;
