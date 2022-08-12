import React from "react";
import ProjectRender from "../utils/components/Project-Render";
import ProfilePic from "../layout/images/profile.jpg";

function Home({ repos }) {
  const liveDeploy = [];
  return (
    <main className="specContentFormat">
      <div>
        <h2>Welcome to my Github universe!</h2>
        <h3>
          Here, you can see brief snapshots of my projects displayed as their
          own planets. Each planet has unique details about the project,
          including a link to it's Github. Some of my planets may also have life
          on them, so feel free to check them out if you want to see other live
          examples of my projects.
        </h3>
      </div>
      <section className="mediaQueryflex" id="home">
        <img src={ProfilePic} alt="Developer" title="Developer" />
        <div>
          <h2>Merrix Murphy</h2>
          <h3>Full Stack React Developer </h3>
          <p>
            Graduate of{" "}
            <a href="https://www.thinkful.com/about/" target="blank">
              Thinkful
            </a>{" "}
            and{" "}
            <a href="https://www.unlv.edu/about" target="blank">
              UNLV{" "}
            </a>
          </p>
          <p>
            Currently a contractor for{" "}
            <a
              href="https://www.intel.com/content/www/us/en/company-overview/company-overview.html"
              target="blank"
            >
              Intel
            </a>
          </p>
        </div>
      </section>
      <h3>Here are my most recent Projects:</h3>
      {repos ? (
        <ProjectRender repos={repos} deploy={liveDeploy} homePage={true} />
      ) : null}
    </main>
  );
}

export default Home;
