import React from "react";
import ProjectRender from "../utils/components/Project-Render";

function PersonalProjects({repos}) {
  const liveDeploy = []
  return (
    <div className="mainContent">
      <ProjectRender repos={repos} deploy={liveDeploy}/>
    </div>
  )}

export default PersonalProjects;
