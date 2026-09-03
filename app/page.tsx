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
    <>
      <Hero content={content?.hero} />
      <MarqueeTicker />
      <Philosophy content={content?.philosophy} />
      <Services content={content?.services} />
      <Portfolio content={content?.portfolio} />
      <Process content={content?.process} />
      <AboutSection content={content?.about} />
      <Testimonials content={content?.testimonials} />
    </>
  );
}
