import React, {useState, useEffect} from "react";

function About() {
  const languages = ["JavaScript", "CSS", "HTML", "Java"];
  const frameworks = ["React", "Node", "Express", "Bootstrap"];
  const tools = ["Git", "GitHub", "GitHub Pages", "Vercel", "Heroku"];
  const lan = languages.length
  const fra = frameworks.length
  const tol = tools.length
  const [longest, setLongest] = useState(0);
useEffect(() => {
  if (lan > fra) {
    if (lan > tol) {
      setLongest(lan);
    } else {
      setLongest(tol);
    }
  } else {
    if (fra > tol) {
      setLongest(fra);
    } else {
      setLongest(tol);
    }
  }
}, [lan, fra, tol]);
  return (
    <div className="mainContent">
      <h2>Hi!</h2>
          <h3>I am a Full Stack Web Developer who has been developing since early 2020.</h3>
          <h4>I graduated from <a href="https://www.thinkful.com/about/" target="blank" className="displayInline">Thinkful</a> in 2021 with a certification in software engineering and from <a href="https://www.unlv.edu/about" target="blank" className="displayInline">UNLV </a>in 2018 with a BA in English and a Concentration in creative writing.</h4>
          <h4>I currently work for <a href="https://www.ust.com/en/who-we-are" target="blank" className="displayInline">UST</a> as a contractor for <a href="https://www.intel.com/content/www/us/en/company-overview/company-overview.html" target="blank" className="displayInline">Intel</a>.</h4>
          <h4>Web Developer proficient in JavaScript ES6, React, HTML5, and CSS3 with 4 years of experience in customer service which has developed stress management, customer service, and troubleshooting skills. Have a strong interest in storytelling, which helped me acquire a BA in English with a concentration in Creative Writing.</h4>
          <h1>Skills</h1>
     <table>
      <thead>
      <tr>
        <th>Languages</th>
        <th>Frameworks</th>
        <th>Tools</th>
      </tr>
      </thead>
        <tbody>
      {longest.map((e, i) => (
    <tr>
    <td>{languages[i] !== undefined ? languages[i] : null}</td>
    <td>{frameworks[i] !== undefined ? frameworks[i] : null}</td>
    <td>{tools[i] !== undefined ? tools[i] : null}</td>
    </tr>
        ))}
      </tbody>
     </table>
      <h4>You can find out more about me on <a href="https://github.com/MerrixMurphy" target="blank" className="displayInline">GitHub</a> and <a href="https://www.linkedin.com/in/merrix-murphy/" target="blank" className="displayInline">LinkedIn</a>.</h4>
    </div>
  );
}

export default About;
