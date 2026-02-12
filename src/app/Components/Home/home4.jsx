'use client'
import About4 from "../About/About4";
import Blog4 from "../Blog/Blog4";
import Cta3 from "../Cta/Cta3";
import HeroBanner4 from "../HeroBanner/HeroBanner4";
import HowWork3 from "../HowWork/HowWork3";
import Pricing1 from "../Pricing/Pricing1";
import Project3 from "../Project/Project3";
import Services4 from "../Services/Services4";
import Testimonial3 from "../Testimonial/Testimonial3";
import { useContent } from "../../context/ContentContext";
import ParallaxViewport from "../Parallax/ParallaxViewport";
import ParallaxPinned from "../Parallax/ParallaxPinned";

const Home4 = () => {
    const { content } = useContent();
    const { hero, about } = content.home;
    return (
        <div>
            {/* <ParallaxViewport intensity={0.06} speed={0.12}> */}
            {/* <ParallaxPinned smooth={1.2} pinSpacing={true}> */}

                <HeroBanner4
                    subtitle={hero.subtitle}
                    title={hero.title}
                    content={hero.content}
                    btnone={hero.btnOne.label}
                    btnoneurl={hero.btnOne.href}
                    btntwo={hero.btnTwo.label}
                    btntwourl={hero.btnTwo.href}
                    shape1={hero.shape1}
                />
                <About4
                    image1={about.image1}
                    image2={about.image2}
                    image3={about.image3}
                    shape1={about.shape1}
                    subTitle={about.subtitle}
                    Title={about.title}
                    content={about.content}
                    expNum={about.expNum}
                    expCon={about.expLabel}
                    featurelist={about.features}
                    btnName={about.btn.label}
                    btnUrl={about.btn.href}
                />
                <Services4></Services4>
                <HowWork3></HowWork3>
                <Project3></Project3>
                {/* <Pricing1></Pricing1> */}
                <Testimonial3></Testimonial3>
                <Blog4></Blog4>
                <Cta3></Cta3>
                {/* </ParallaxViewport> */}
            {/* </ParallaxPinned> */}
        </div>
    );
};


export default Home4;