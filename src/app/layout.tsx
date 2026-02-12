import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Script from "next/script";
import Header4 from './Components/Header/HeaderStyle4';
import Footer4 from './Components/Footer/Footer4';
import SmoothScroll from './Components/SmoothScroll';
import { ContentProvider } from './context/ContentContext';
import { getDynamicContent } from './lib/data';
import BgType2 from "./ai-bg/BgType2";
import BgWater from "./ai-bg/BgWater";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const content = await getDynamicContent();
  return {
    title: content.site?.name ? `${content.site.name} - Defying The Laws of Software` : "OrbitThink - Defying The Laws of Software",
    description: content.site?.description || "We help startups turn ideas into scalable web & mobile products — fast.",
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialContent = await getDynamicContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          {/* <BgType2 width="100vw" height="100vh" /> */}
          <BgWater width="100vw" height="100vh" />
        </div>
        <ContentProvider initialData={initialContent}>
          <Header4 />
          {/* <SmoothScroll> */}
          {children}
          {/* </SmoothScroll> */}
          <Footer4 />
        </ContentProvider>

        {/* Chat Widget Bot Integration */}
        <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" strategy="beforeInteractive" />
        <Script src="/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
