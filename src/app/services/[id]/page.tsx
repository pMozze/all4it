import { FC } from 'react';
import { ServicePage } from '@/views/service';

interface Props {
  params: {
    id: string;
  };
}

const Page: FC<Props> = ({ params: { id } }) => {
  return <ServicePage id={Number(id)} />;
};

export default Page;
