import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import PersonalProjects from "../personal/Personal-Projects";
import ProfessionalProjects from "../professional/Professional-Projects"
import {listRepos, getRepoReadme} from "../utils/api/api"

function Routing() {
  const [repos, setRepos] = useState([])
  const [allRepos, setAllRepos] = useState([])
  const [perRepos, setPerRepos] = useState([])
  const [proRepos, setProRepos] = useState([])
  const [newRepos, setNewRepos] = useState([])

  function pullRepos(){
    const abortController = new AbortController();
    listRepos()
    .then(setAllRepos)
    .catch((err) => console.log(err))
    return () => abortController.abort
  }
  
  function distroRepos(){
    const professionalRepos = [425923736, 383274947, 388184984, 401868243, 399282785, 377055692, 411456847]
    const personalRepos = [380911451, 380910496, 380909285, 380909848, 380913201]
    const exclude = [385342395, 439740161]
          setPerRepos([])
          setNewRepos([])
          setProRepos([])
      repos.forEach((element) => {
        if (!exclude.includes(element.id)){
    if (professionalRepos.includes(element.id)){
      setProRepos(p => [...p, element])
    } else if (personalRepos.includes(element.id)){
      setPerRepos(p => [...p, element])
    } else {
      setNewRepos(p => [...p, element])
    }
  }
  })
}
  // function readRepo(repo){
  //   const abortController = new AbortController();
  //   getRepoReadme(repo).then()
  //   return () => abortController.abort
  // }
  useEffect(pullRepos, [])
  useEffect(() => {
    const newRepoList = []
    allRepos.forEach((element) => {
      if (element.fork === false) {
        newRepoList.push({
          name: element.name,
          description: element.description,
          id: element.id,
          html_url: element.html_url
        })
      }
    })
    setRepos(newRepoList)
  }, [allRepos])
  useEffect(distroRepos, [repos])
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
