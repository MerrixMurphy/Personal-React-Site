import React from "react"
import ProjectRender from "../utils/components/Project-Render"

function Home({repos}) {
  const liveDeploy = []
      return (
        <div className="mainContent">
          <ProjectRender repos={repos} deploy={liveDeploy} homePage={true}/>
      </div>
)}

export default Home;
