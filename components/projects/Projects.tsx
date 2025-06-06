"use client";

import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import ProjectList from "./ProjectList";
import { PROJECTS } from "@/constants";

const Projects = () => {
  const projects = PROJECTS;

  return (
    <ProjectsContainer>
      <ProjectList projects={projects} />
    </ProjectsContainer>
  );
};

export default Projects;
