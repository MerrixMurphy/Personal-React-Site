import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function PersonalProjects({ repos }) {
  let pathname = window.location.pathname;
  const regex = new RegExp("p", "g");
  pathname = pathname.replace("-", " ").replace(regex, "P").slice(1);
  const liveDeploy = [];
  return (
    <main className="normContentFormat">
      <h3>Here are my {pathname}:</h3>
      {repos ? <ProjectRender repos={repos} deploy={liveDeploy} /> : null}
    </main>
  );
}

export default PersonalProjects;
