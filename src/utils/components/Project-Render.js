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
    <div>
    {!homePage ? null : <div>
            <h2>Hi! I'm Merrix Murphy</h2>
            <h3>I am a Full Stack Web Developer and graduate of Thinkful and UNLV.</h3>
            <h4>I currently work for UST as a contractor for Intel.</h4>
          </div>}
    {repos.length > 0 ? 
      //make live url change between git and heroku
        <div key={repos[currentRepo].id}>
          <h2>Check out my latest projects!</h2>
          <div className="flex">
          {repos.length > 1 ? <img src={Arrow} onClick={leftArrow} alt="Left" title="Left" className="left"/> : null}
          {deploy.includes(repos[currentRepo].id) ? <Planet liveName={repos[currentRepo].name}/> : <Planet/>}
          {repos.length > 1 ? <img src={Arrow} onClick={rightArrow} alt="Right" title="Right" className="right"/> : null}
          </div>
          {deploy.includes(repos[currentRepo].id) ? <a href={repos[currentRepo].html_url} target="blank">{repos[currentRepo].name} (This planet has life! Click it to find out more!)</a> : <a href={repos[currentRepo].html_url} target="blank">{repos[currentRepo].name}</a>}
          <h5>Last updated: {repos[currentRepo].last_pushed}</h5>
          <h5>{repos[currentRepo].description}</h5>
        </div>
    : (<h4>No Repos</h4>)}
    </div>
  )}

export default ProjectRender;
