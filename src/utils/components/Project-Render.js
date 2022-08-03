import React, {useState} from "react";
import Planet from "./Planet";
import Arrow from "../../layout/images/arrowBtn.png";

function ProjectRender({repos, deploy, homePage}) {
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
            repos.length > 0 ? 
      //make live url change between git and heroku
        <div key={repos[currentRepo].id} >
          <h2>Planet Number: {repos[currentRepo].id}</h2>
          <div className="flex">
          {repos.length > 1 ? <img src={Arrow} onClick={leftArrow} alt="Left" title="Left" className="left"/> : null}
          {deploy.includes(repos[currentRepo].id) ? <Planet liveName={repos[currentRepo].name}/> : <Planet/>}
          {repos.length > 1 ? <img src={Arrow} onClick={rightArrow} alt="Right" title="Right" className="right"/> : null}
          </div>
          <div>
          <p>Project Name: <a href={repos[currentRepo].html_url} target="blank" className="displayInline">{repos[currentRepo].name}</a></p>
          <p>Supports Life: {deploy.includes(repos[currentRepo].id) ?  <a href={`https://merrixmurphy.github.io/` + repos[currentRepo].name} target="blank" className="displayInline">True</a> : "False"} </p>
          <p>Last update: {repos[currentRepo].last_pushed}</p>
          <p>{repos[currentRepo].description}</p>
          </div>
        </div>
    : (<h4>No Repos</h4>)
  )}

export default ProjectRender;
