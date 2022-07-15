import React from "react"
import ProjectRender from "../utils/components/Project-Render"

function Home({repos}) {
  const liveDeploy = []
      return (
        <div className="mainContent">
          <h2>Hi! I'm Merrix Murphy</h2>
          <h3>I am a Full Stack Web Developer and graduate of Thinkful and UNLV.</h3>
          <h4>I currently work for UST as a contractor for Intel.</h4>
          <h3>Check out my newest projects here!</h3>
          <ProjectRender repos={repos} deploy={liveDeploy}/>
      </div>
)}

export default Home;
