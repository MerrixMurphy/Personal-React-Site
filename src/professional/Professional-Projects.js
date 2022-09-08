import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function ProfessionalProjects({ repos }) {
  let pathname = window.location.pathname;
  const regex = new RegExp("p", "g");
  pathname = pathname.replace("-", " ").replace(regex, "P").slice(1);
  return (
    <main className="normContentFormat">
      <h3>Here are my {pathname}:</h3>
      {repos ? <ProjectRender repos={repos} /> : null}
    </main>
  );
}

export default ProfessionalProjects;
