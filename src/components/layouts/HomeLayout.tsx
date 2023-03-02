/**
 * import next packages
 */
import { NextPage } from "next";
import Head from 'next/head';

/**
 * import project files
 */
import { PageProps } from './types';

const HomeLayout: NextPage<PageProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./assets/img/apple-icon.png"
        />
        <title>Tyrell System - Draw, Play, Fun by Hein Chiong</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
