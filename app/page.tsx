import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Subscribe from "@/components/Subscribe";
import { getDynamicContent } from "@/lib/data";

export default async function Home() {
  const content = await getDynamicContent();

  return (
    <>
      <Hero content={content.hero} />
      <Services content={content.services} />
      <AboutSection content={content.about} />
      <Process content={content.process} />
      <Portfolio content={content.portfolio} />
      <Pricing />
      <Testimonials />
      <Subscribe />
    </>
  );
}
