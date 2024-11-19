import { FC } from 'react';
import { notFound } from 'next/navigation';
import classNames from 'classnames';

import { fromUnixTime, formatDate } from 'date-fns';
import { ru } from 'date-fns/locale';

import { fetchProject } from '../api';

import { BackButton } from '@/shared';
import { GalleryCarousel } from '@/shared';

import styles from './ProjectPage.module.css';

interface Props {
  id: number;
}

const ProjectsPage: FC<Props> = async ({ id }) => {
  const project = await fetchProject(id);

  if (!project) {
    return notFound();
  }

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <BackButton className={styles.backButton} href='/projects' />
      <article className={styles.project}>
        <div className={styles.shortDescription}>{project.shortDescription}</div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.secondShortDescription}>{project.secondShortDescription}</p>
        <div className={styles.divider}></div>
        <p className={styles.description}>{project.description}</p>
        <GalleryCarousel className={styles.gallery} images={project.gallery} slidesPerView={3} />
      </article>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogotypeWrapper}>
          <img className={styles.sidebarLogotype} src={project.logotype} alt='' />
        </div>
        <div className={styles.projectName}>{project.title}</div>
        <a className={styles.projectUrl} href={project.url} target='_blank' rel='noopener noreferrer'>
          {new URL(project.url).hostname.replace('www.', '')}
        </a>
        <div className={styles.sidebarDivider}></div>
        <div>
          <div className={styles.sidebarBlockTitle}>Дата разработки</div>
          <div className={styles.sidebarBlockDescription}>
            {formatDate(fromUnixTime(project.developmentDate), 'LLLL yyyy', { locale: ru })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProjectsPage;
