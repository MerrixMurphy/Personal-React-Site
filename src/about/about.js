import React, { useState, useMemo, useEffect } from "react";
import ProfilePic from "../layout/images/profile.jpg";

function About() {
  const languages = useMemo(() => ["JavaScript", "CSS", "HTML", "Java"], []);
  const frameworks = useMemo(
    () => ["React", "Node", "Express", "Bootstrap"],
    []
  );
  const tools = useMemo(
    () => ["Git", "GitHub", "GitHub Pages", "Vercel", "Heroku"],
    []
  );
  const [longest, setLongest] = useState(null);

  useEffect(() => {
    if (languages.length > frameworks.length) {
      if (languages.length > tools.length) {
        setLongest(languages);
      } else {
        setLongest(tools);
      }
    } else {
      if (frameworks.length > tools.length) {
        setLongest(frameworks);
      } else {
        setLongest(tools);
      }
    }
  }, [frameworks, languages, tools]);

  return (
    <main className="specContentFormat">
      <section className="mediaQueryflex">
        <img src={ProfilePic} alt="Developer" title="Developer" />
        <div>
          <h6>Developer since 2020</h6>
          <h6>
            Graduated from{" "}
            <a href="https://www.thinkful.com/about/" target="blank">
              Thinkful
            </a>{" "}
            in 2021 with a certification in software engineering{" "}
          </h6>
          <h6>
            Graduated from{" "}
            <a href="https://www.unlv.edu/about" target="blank">
              UNLV
            </a>{" "}
            in 2018 with a BA in English and a Concentration in creative writing
          </h6>
          <h6>
            I currently work full time for{" "}
            <a href="https://www.ust.com/en/who-we-are" target="blank">
              UST
            </a>{" "}
            and as a contractor for{" "}
            <a
              href="https://www.intel.com/content/www/us/en/company-overview/company-overview.html"
              target="blank"
            >
              Intel
            </a>
          </h6>
        </div>
      </section>
      <h6>
        Full Stack Web Developer proficient in JavaScript ES6, React, HTML5, and
        CSS3 with 4 years of experience in customer service which has developed
        stress management, customer service, and troubleshooting skills. Have a
        strong interest in storytelling, which helped me acquire my BA in
        English.
      </h6>
      <h3>Skills</h3>
      <table>
        <thead>
          <tr>
            <th>Languages</th>
            <th>Frameworks</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {longest
            ? longest.map((e, i) => (
                <tr key={`table` + longest[i]}>
                  <td
                    key={
                      languages[i] !== undefined
                        ? languages[i]
                        : `languages` + i + `null`
                    }
                  >
                    {languages[i] !== undefined ? languages[i] : null}
                  </td>
                  <td
                    key={
                      frameworks[i] !== undefined
                        ? frameworks[i]
                        : `frameworks` + i + `null`
                    }
                  >
                    {frameworks[i] !== undefined ? frameworks[i] : null}
                  </td>
                  <td
                    key={
                      tools[i] !== undefined ? tools[i] : `tools` + i + `null`
                    }
                  >
                    {tools[i] !== undefined ? tools[i] : null}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <h6>
        You can find out more about me on{" "}
        <a href="https://github.com/MerrixMurphy" target="blank">
          GitHub
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/in/merrix-murphy/" target="blank">
          LinkedIn
        </a>
        .
      </h6>
    </main>
  );
}

export default About;
