import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function ProfessionalProjects({ repos }) {
  let pathname = window.location.pathname;
  const regex = new RegExp("p", "g");
  pathname = pathname.replace("-", " ").replace(regex, "P").slice(1);
  const liveDeploy = [377055692, 399282785, 388184984, 383274947];
  return (
    <main className="normContentFormat">
      <h3>Here are my {pathname}:</h3>
      {repos ? <ProjectRender repos={repos} deploy={liveDeploy} /> : null}
    </main>
  );
}

export default ProfessionalProjects;
