import Data from "../assets/Data";
import React from "react";

function Personal() {
  const personalProjects = Data.filter((proj) => proj.type === "personal");

  return personalProjects.map((proj) => (
    <div>
      <h1>{proj.name}</h1>
      <h1>{proj.icon}</h1>
      <h1>{proj.hyperlink}</h1>
      <h1>{proj.summary}</h1>
      <h1>{proj.tech}</h1>
      <h1>{proj.skills}</h1>
    </div>
  ));
}

export default Personal;
