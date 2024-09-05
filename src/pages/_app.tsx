import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

import "../theme/globals.scss";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer theme="colored" />
      <Component {...pageProps} />
    </>
  );
}
