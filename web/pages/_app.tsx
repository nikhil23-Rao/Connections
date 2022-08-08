import "../styles/globals.css";
import "../styles/Landing/AnimatedTitle.css";
import "../styles/Landing/Button.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
