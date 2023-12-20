import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title> Lokalingo </title>
        <meta
          name="description"
          content="Duolingo web app clone written with React"
        />
        <link rel="icon" href="/lokalingo.ico" />
        <meta name="theme-color" content="#0A0" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
};

export default MyApp;
