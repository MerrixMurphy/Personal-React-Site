import React, {useState} from "react";
import Planet from "./Planet";
import Arrow from "../../layout/images/arrowBtn.png";

function ProjectRender({repos, deploy}) {
    repos.sort()
    const [currentRepo, setCurrentRepo] = useState(0)
    function rightArrow() {
        if (currentRepo < repos.length - 1) {
            setCurrentRepo(currentRepo + 1);
        }
    }
    function leftArrow() {
        if (currentRepo > 0) {
            setCurrentRepo(currentRepo - 1);
        }
    }
  return (
    <div>
    {repos.length > 0 ? 
      //make 3d orb that spins with random textures for each one and scroll with arrows sideways maybe
      //make live url change between git and heroku
        <div key={repos[currentRepo].id}>
          {deploy.includes(repos[currentRepo].id) ? <Planet onClick={window.open(`https://merrixmurphy.github.io/` + repos[currentRepo].name)}/> : <Planet />}
          <img src={Arrow} onClick={leftArrow} alt="Left" title="Left" className="left"/>
          <img src={Arrow} onClick={rightArrow} alt="Right" title="Right" className="right"/>
          {deploy.includes(repos[currentRepo].id) ? <a href={repos[currentRepo].html_url} target="blank">{repos[currentRepo].name} (Live)</a> : <a href={repos[currentRepo].html_url} target="blank">{repos[currentRepo].name}</a>}
          <h5>{repos[currentRepo].description}</h5>
        </div>
    : (<h4>No Repos</h4>)}
    </div>
  )}

export default ProjectRender;
