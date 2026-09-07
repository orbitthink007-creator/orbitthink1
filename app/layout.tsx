import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDynamicContent } from "@/lib/data";
import { Providers } from "./providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "OrbitThink | Digital products made to move",
  description: "OrbitThink is an independent product and engineering studio for AI, web, mobile, and immersive experiences.",
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
    <html lang="en">
      <body className="bg-[#f8f7f3] text-[#171719] antialiased">
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
