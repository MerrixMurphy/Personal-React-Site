import React, { useState } from "react";
import Planet from "./Planet";
import Arrow from "../../layout/images/arrowBtn.png";

function ProjectRender({ repos, deploy, homePage }) {
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
        {deploy.includes(repos[currentRepo].id) ? (
          <Planet liveName={repos[currentRepo].name} />
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
          <strong>Planet Code Name: </strong>
          <a href={repos[currentRepo].html_url} target="blank">
            {repos[currentRepo].name}
          </a>
        </p>
        <p>
          <strong>Supports Life: </strong>
          {deploy.includes(repos[currentRepo].id) ? (
            <a
              href={`https://merrixmurphy.github.io/` + repos[currentRepo].name}
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
