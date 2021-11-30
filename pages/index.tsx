import type { NextPage } from 'next';
import Head from 'next/head';
import { Logo } from '../src/components/Logo';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/OutrunFuture/Outrun-future.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Logo />
    </div>
  );
};

export default Home;
