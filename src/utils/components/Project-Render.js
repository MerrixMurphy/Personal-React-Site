import React, { useState } from "react";
import Planet from "./Planet";
import Arrow from "../../layout/images/arrowBtn.png";

function ProjectRender({ repos, homePage }) {
  const [currentRepo, setCurrentRepo] = useState(0);
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
  return repos.length > 0 ? (
    //make live url change between git and heroku
    <section key={repos[currentRepo].id} id="projectRender">
      <h2>
        <strong>Planet Number: </strong>
        {repos[currentRepo].id}
      </h2>
      <div className="flexCenter">
        <img
          src={Arrow}
          onClick={leftArrow}
          alt="Left"
          title="Left"
          className="left"
          style={{ visibility: currentRepo !== 0 ? "visible" : "hidden" }}
        />
        {repos[currentRepo].deploy ? (
          <Planet
            liveName={repos[currentRepo].name}
            deploy={repos[currentRepo].deploy}
          />
        ) : (
          <Planet />
        )}
        <img
          src={Arrow}
          onClick={rightArrow}
          alt="Right"
          title="Right"
          className="right"
          style={{
            visibility:
              repos.length > 1 && currentRepo < repos.length - 1
                ? "visible"
                : "hidden",
          }}
        />
      </div>
      <div style={{ overflow: homePage ? "visible" : "auto" }}>
        <p>
          <strong>Code Name: </strong>
          <a href={repos[currentRepo].html_url} target="blank">
            {repos[currentRepo].name}
          </a>
        </p>
        <p>
          <strong>Supports Life: </strong>
          {repos[currentRepo].deploy ? (
            <a
              href={
            repos[currentRepo].deploy === "git" ? 
            `https://merrixmurphy.github.io/` + repos[currentRepo].name
           : repos[currentRepo].deploy === "itch" ?
repos[currentRepo].name === "minifight" ?
"https://edwardvonbock.itch.io/trial-of-explorers" :
          null :
`https://` + repos[currentRepo].name + `.onrender.com`
            }
              target="blank"
            >
              True
            </a>
          ) : (
            "False"
          )}{" "}
        </p>
        <p>
          <strong>Last update: </strong>
          {repos[currentRepo].last_pushed}
        </p>
        <p>{repos[currentRepo].description}</p>
      </div>
    </section>
  ) : (
    <h2>No Repos</h2>
  );
}

export default ProjectRender;
