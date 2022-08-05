import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function PersonalProjects({ repos }) {
  const liveDeploy = [];
  return (
    <main className="normContentFormat">
      {repos ? <ProjectRender repos={repos} deploy={liveDeploy} /> : null}
    </main>
  );
}

export default PersonalProjects;
