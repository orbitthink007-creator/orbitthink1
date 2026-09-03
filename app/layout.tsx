import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDynamicContent } from "@/lib/data";
import { Providers } from "./providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "OrbitThink | Defying The Laws of Software",
  description: "Independent engineering studio for enterprise AI, immersive 3D/VR, distributed web architectures, and mobile systems.",
  icons: {
    icon: "/images/orbitthink-mark.svg"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getDynamicContent();

  return (
    <html lang="en" className="dark bg-[#09090b]">
      <body className="bg-[#09090b] text-white antialiased selection:bg-[#00CD58] selection:text-[#0a0a0a]">
        <Providers>
          <SmoothScrollProvider>
            <WhatsAppButton heroContent={content?.hero} />
            <Navbar content={content?.navbar} />
            <main className="min-h-screen">{children}</main>
            <Footer content={content?.footer} />
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
