import React from "react";
import ProjectRender from "../utils/components/Project-Render";
import ProfilePic from "../layout/images/profile.jpg";

function Home({ repos }) {
  const liveDeploy = [];
  return (
    <main className="specContentFormat">
      <h2>Welcome to my universe!</h2>
      <h3>
        Here you can find some of the newest projects I'm working on or check
        out a full list of my personal and professional projects.
      </h3>
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
      {repos ? (
        <ProjectRender repos={repos} deploy={liveDeploy} homePage={true} />
      ) : null}
    </main>
  );
}

export default Home;
