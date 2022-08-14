import type { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { getPlanes } from '@fetch/planes';

interface Props {
  planes: string[];
}

const Home: NextPage<Props> = ({ planes }) => {
  const { data } = useSession();

  return (
    <div>
      <h1>Home</h1>
      <div>{data?.user?.name}</div>
      <div>{data?.user?.email}</div>
      <div>{JSON.stringify(planes)}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  params,
  query,
}) => {
  console.log('params', params, 'query', query);

  const planes = await getPlanes.server(req);

  return {
    props: { planes },
  };
};

export default Home;
