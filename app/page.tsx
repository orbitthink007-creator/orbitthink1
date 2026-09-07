import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import { getDynamicContent } from "@/lib/data";

export default async function Home() {
  const content = await getDynamicContent();

  return (
    <div className="relative bg-[#f8f7f3]">
      {/* Sticky Hero: Pinned in place so the content below smoothly slides up over it */}
      <Hero content={content?.hero} />

      {/* Foreground Content Stack that glides over the Hero with parallax depth */}
      <div className="relative z-10 bg-[#f8f7f3] shadow-[0_-25px_60px_rgba(23,23,25,0.08)]">
        <MarqueeTicker />
        <Philosophy content={content?.philosophy} />
        <Services content={content?.services} />
        <Portfolio content={content?.portfolio} />
        <Process content={content?.process} />
        <AboutSection content={content?.about} />
        <Testimonials content={content?.testimonials} />
      </div>
    </div>
  );
}
