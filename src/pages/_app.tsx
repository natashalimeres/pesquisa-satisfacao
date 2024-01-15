import "@/styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "next/font/google";

type DefaultAppProps = {};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps,
  ...appProps
}: AppProps<DefaultAppProps>) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Pesquisa de satisfação Fidelimax</title>
      </Head>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
