import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import MyProjects from "../components/MyProjects/MyProjects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe />
      <MyProjects />
    </div>
  );
};

export default Home;
