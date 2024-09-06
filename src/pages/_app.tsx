import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

import "../theme/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ToastContainer theme="colored" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
