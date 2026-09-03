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
    <div className="relative">
      {/* Sticky Hero: stays pinned to viewport while the content below glides up over it */}
      <Hero content={content?.hero} />

      {/* Foreground Content wrapper that smoothly travels upward over the Hero */}
      <div className="relative z-10 bg-[#09090b] shadow-[0_-25px_60px_rgba(0,0,0,0.9)]">
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
