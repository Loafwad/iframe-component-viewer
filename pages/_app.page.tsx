import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navmenu from "../components/Misc/NavTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navmenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
