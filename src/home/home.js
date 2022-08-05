import React from "react";
import ProjectRender from "../utils/components/Project-Render";
import ProfilePic from "../layout/images/profile.jpg";

function Home({ repos }) {
  const liveDeploy = [];
  return (
    <main className="specContentFormat">
      <section className="mediaQueryflex" id="home">
        <img src={ProfilePic} alt="Developer" title="Developer" />
        <div>
          <h2>Merrix Murphy</h2>
          <h3>Full Stack Web Developer </h3>
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
