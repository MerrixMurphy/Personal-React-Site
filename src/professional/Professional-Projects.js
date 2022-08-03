import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function ProfessionalProjects({repos}) {
  const liveDeploy = [377055692]
  return (
    <div className="mainContent">
      {repos ? <ProjectRender repos={repos} deploy={liveDeploy}/> : null}
    </div>
  )}

export default ProfessionalProjects;
