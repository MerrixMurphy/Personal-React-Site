import React from "react";
import Nav from "./nav";
import Routes from "./routes";

import "./layout.css";

function Layout() {
  return (
    <div className="starry">
      <Nav />
      <Routes />
    </div>
  );
}

export default Layout;
