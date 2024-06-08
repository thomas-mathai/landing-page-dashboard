import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <DefaultSeo
        defaultTitle="Fibr landing page"
        description="Fibr landing page login"
        title="Fibr landing page login"
      />
      <Component {...pageProps} />
    </div>
  );
}
