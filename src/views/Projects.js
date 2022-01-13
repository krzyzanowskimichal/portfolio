import React from "react";
import MainTemplate from "../templates/MainTemplate";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import projectsArray from "../db/data"
import { useTranslation } from "react-i18next";

const Projects = (props) => {
    const { t, i18n } = useTranslation();

  return (
    <MainTemplate name={t('projects')} {...props}>
        {projectsArray.map(({ id, title, link, tech }) => <ProjectCard key={id} id={id} title={title} link={link} tech={tech}/>)}
    </MainTemplate>
  );
};

export default Projects;
