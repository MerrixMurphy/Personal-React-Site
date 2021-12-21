import React from "react";
import Menu from "./layouts/Menu";
import Router from "./layouts/Router";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="App">
      <div className="container">
        <Menu />
        <Router />
      </div>
    </div>
  );
}

export default App;
