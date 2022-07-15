import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function ProfessionalProjects({repos}) {
  const liveDeploy = [377055692]
  return (
    <div className="mainContent">
      <h2>Check out my latest professional projects!</h2>
      <ProjectRender repos={repos} deploy={liveDeploy}/>
    </div>
  )}

export default ProfessionalProjects;
