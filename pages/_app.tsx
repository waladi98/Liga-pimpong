import "../styles/globals.css";
import "swiper/css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
