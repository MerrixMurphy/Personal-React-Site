import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Contact from "../contact/contact";
import PersonalProjects from "../personal/Personal-Projects";
import ProfessionalProjects from "../professional/Professional-Projects";
import NotFound from "./notFound";
import { listRepos } from "../utils/api/api";

function Routing() {
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [perRepos, setPerRepos] = useState(null);
  const [proRepos, setProRepos] = useState(null);
  const [newRepos, setNewRepos] = useState(null);
  const defaultContactData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contactData, setContactData] = useState({ ...defaultContactData });

  function pullRepos() {
    const abortController = new AbortController();
    listRepos()
      .then(setAllRepos)
      .catch((err) => console.log(err));
    return () => abortController.abort;
  }

  function distroRepos() {
    const professionalRepos = [
      425923736, 383274947, 388184984, 401868243, 399282785, 377055692,
      411456847,
    ];
    const personalRepos = [
      380911451, 380910496, 380909285, 380909848, 380913201,
    ];
    const exclude = [385342395, 439740161];
    setPerRepos([]);
    setNewRepos([]);
    setProRepos([]);
    repos.forEach((element) => {
      if (!exclude.includes(element.id)) {
        if (professionalRepos.includes(element.id)) {
          setProRepos((p) => [...p, element]);
        } else if (personalRepos.includes(element.id)) {
          setPerRepos((p) => [...p, element]);
        } else {
          setNewRepos((p) => [...p, element]);
        }
      }
    });
  }

  useEffect(pullRepos, []);
  useEffect(() => {
    const newRepoList = [];
    const gitDeploy = [377055692, 399282785, 388184984, 383274947];
    const otherDeploy = [401868243, 425923736, 562235508];
    let deployed = null;
    if (allRepos.length > 0) {
      allRepos.forEach((element) => {
        if (element.fork === false) {
          const betterLastPush = new Date(element.pushed_at)
            .toString()
            .slice(0, 15);
          if (gitDeploy.includes(element.id)) {
            deployed = "git";
          } else if (otherDeploy.includes(element.id)) {
            deployed = "other";
          } else {
            deployed = null
          }
          newRepoList.push({
            name: element.name,
            description: element.description,
            id: element.id,
            html_url: element.html_url,
            last_pushed: betterLastPush,
            isPrivate: element.private,
            deploy: deployed,
          });
        }
      });
    }
    setRepos(newRepoList);
  }, [allRepos]);
  useEffect(distroRepos, [repos]);
  return (
    <Routes>
      <Route exact={true} path="/" element={<Navigate to={"/home"} />} />
      <Route exact={true} path="/home" element={<Home repos={newRepos} />} />
      <Route exact={true} path="/about" element={<About />} />
      <Route
        exact={true}
        path="/contact"
        element={
          <Contact
            contactData={contactData}
            setContactData={setContactData}
            defaultContactData={defaultContactData}
          />
        }
      />
      <Route
        exact={true}
        path="/personal-projects"
        element={<PersonalProjects repos={perRepos} />}
      />
      <Route
        exact={true}
        path="/professional-projects"
        element={<ProfessionalProjects repos={proRepos} />}
      />
      <Route exact={true} path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
