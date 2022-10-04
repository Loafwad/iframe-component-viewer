import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";
import { Layout } from "../components/Misc/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout id="this">
          <div className="m-auto text-4xl font-semibold text-primary">
            <h1>
              Velkommen til vårt <span className="text-accent">kartotek!</span>
            </h1>
          </div>
        </Layout>
      </main>

      <footer>
        <span></span>
      </footer>
    </div>
  );
};

export default Home;
