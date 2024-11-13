import { FC } from 'react';
import { notFound } from 'next/navigation';
import classNames from 'classnames';

import { fetchProjects } from '../api';

import ProjectCard from './project-card/ProjectCard';

import styles from './ProjectsPage.module.css';

const ProjectsPage: FC = async () => {
  const projects = await fetchProjects();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.hero}>
          <div className={styles.subtitle}>Проекты</div>
          <hgroup>
            <h1 className={styles.title}>Познакомьтесь с проектами над которыми мы работали</h1>
            <p className={styles.description}>От стартапов нового поколения до устоявшихся предприятий</p>
          </hgroup>
        </div>
        <div className={styles.projects}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              logotype={project.logotype}
              shortDescription={project.shortDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
