// import localFont from "next/font/local";
import { Html, Head, Main, NextScript } from "next/document";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
