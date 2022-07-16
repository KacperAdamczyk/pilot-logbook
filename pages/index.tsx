import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();

  return (
    <div>
      <h1>Home</h1>
      <div>{data?.user?.name}</div>
      <div>{data?.user?.email}</div>
      <div></div>
    </div>
  );
};

export default Home;
