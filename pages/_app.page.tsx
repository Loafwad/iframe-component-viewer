import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navmenu from "../components/Misc/NavTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex bg-frame ">
        <Navmenu />
        <main className="mx-auto">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
