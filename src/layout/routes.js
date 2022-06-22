import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import PersonalProjects from "../personal/Personal-Projects";
import ProfessionalProjects from "../professional/Professional-Projects"

function Routing() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Navigate to={"/home"}/>} />
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/personal-projects" element={<PersonalProjects />}/>
      <Route path="/professional-projects" element={<ProfessionalProjects />}/>
    </Routes>
  );
}

export default Routing;
