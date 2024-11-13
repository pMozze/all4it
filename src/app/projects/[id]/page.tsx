import { FC } from 'react';
import { ProjectPage } from '@/views/project';

interface Props {
  params: {
    id: string;
  };
}

const Page: FC<Props> = ({ params: { id } }) => {
  return <ProjectPage id={Number(id)} />;
};

export default Page;
