import { FC } from 'react';
import { getTranslations } from 'next-intl/server';

import { fetchProjects } from '../api';

import ProjectCard from './project-card/ProjectCard';

import styles from './ProjectsPage.module.css';

const ProjectsPage: FC = async () => {
  const t = await getTranslations('projects');
  const projects = await fetchProjects();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.hero}>
          <div className={styles.subtitle}>{t('subtitle')}</div>
          <hgroup>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.description}>{t('description')}</p>
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
