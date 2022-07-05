import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import PersonalProjects from "../personal/Personal-Projects";
import ProfessionalProjects from "../professional/Professional-Projects"
import {listRepos, getRepoReadme} from "../utils/api/api"

function Routing() {
  const [repos, setRepos] = useState([])
  const [perRepos, setPerRepos] = useState([])
  const [proRepos, setProRepos] = useState([])
  const [newRepos, setNewRepos] = useState([])
  function pullRepos(){
    const abortController = new AbortController();
    listRepos()
    .then(res => res.forEach((element) => {
      if (element.fork === false) {
        const newRepo = {
          name: element.name,
          description: element.name,
          id: element.id,
          html_url: element.html_url
        }
        setRepos({...repos, newRepo})
      }
    })
    )
    .catch((err) => console.log(err))
    return () => abortController.abort
  }
  function distroRepos(){
    const professionalRepos = [425923736, 383274947, 388184984, 401868243, 399282785, 377055692, 411456847, 385342395]
    const personalRepos = [380911451, 380910496, 439740161, 380909285, 380909848, 380913201, 502223407]
    repos.length > 0 ? repos.forEach((element) => {
    if (professionalRepos.includes(element.id)){
      console.log("pro")
      setProRepos({...proRepos, element})
    } else if (personalRepos.includes(element.id)){
      console.log("per")
      setPerRepos({...perRepos, element})
    } else {
      console.log("new")
      setNewRepos({...newRepos, element})
    }
  }) : null
  }
  // function readRepo(repo){
  //   const abortController = new AbortController();
  //   getRepoReadme(repo).then()
  //   return () => abortController.abort
  // }
  useEffect(pullRepos, [setRepos, repos])
  useEffect(distroRepos, [newRepos, perRepos, proRepos, repos])
  return (
    <Routes>
      <Route exact={true} path="/" element={<Navigate to={"/home"}/>} />
      <Route path="/home" element={<Home repos={newRepos} />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/personal-projects" element={<PersonalProjects repos={perRepos} />}/>
      <Route path="/professional-projects" element={<ProfessionalProjects repos={proRepos} />}/>
    </Routes>
  );
}

export default Routing;
