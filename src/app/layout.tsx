import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header4 from './Components/Header/HeaderStyle4';
import Footer4 from './Components/Footer/Footer4';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OrbitThink - Defying The Laws of Software",
  description: "We help startups turn ideas into scalable web & mobile products — fast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header4></Header4>
        {children}
        <Footer4></Footer4>
      </body>
    </html>
  );
}
