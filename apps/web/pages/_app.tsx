import type { AppProps } from "next/app";
// import "@repo/ui/theme.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
