import React from "react";
import Nav from "./nav";
import Routes from "./routes";
import Footer from "./footer";

import "./layout.css";

function Layout() {
  return (
    <div>
      <Nav />
      <Routes />
      <Footer />
      </div>
  );
}

export default Layout;
