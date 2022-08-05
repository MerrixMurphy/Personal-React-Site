import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function ProfessionalProjects({ repos }) {
  const liveDeploy = [377055692];
  return (
    <main className="normContentFormat">
      {repos ? <ProjectRender repos={repos} deploy={liveDeploy} /> : null}
    </main>
  );
}

export default ProfessionalProjects;
