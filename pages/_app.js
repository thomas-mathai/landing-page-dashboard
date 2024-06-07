import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Fibr landing page"
        description="Fibr landing page login"
        title="Fibr landing page login"
      />
      <Component {...pageProps} />
    </>
  );
}
