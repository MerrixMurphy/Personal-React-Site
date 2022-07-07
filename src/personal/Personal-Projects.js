import React from "react";
//if private no github link
function PersonalProjects(repos) {
  const liveDeploy = []
  repos = repos.repos.sort()
  return (
    <div>
      <h2>Check out my latest personal projects!</h2>
    {repos.length > 0 ? repos.map((element) => {
      //make 3d orb that spins with random textures for each one and scroll with arrows sideways maybe
      //make live url change between git and heroku
      return (
        <div key={element.id}>
          <h4>{element.name}</h4>
          <h1>PLANET</h1>
          <h5>{element.description}</h5>
          {!element.isPrivate ? <h6>{element.html_url}</h6> : null}
          {liveDeploy.includes(element.id) ? <h6>https://merrixmurphy.github.io/{element.name}/</h6> : null}
        </div>
      )
    }) : (<h4>No Repos</h4>)}
    </div>
  )}

export default PersonalProjects;
