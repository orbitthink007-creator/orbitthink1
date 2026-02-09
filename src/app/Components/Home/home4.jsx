import About4 from "../About/About4";
import Blog4 from "../Blog/Blog4";
import Cta3 from "../Cta/Cta3";
import HeroBanner4 from "../HeroBanner/HeroBanner4";
import HowWork3 from "../HowWork/HowWork3";
import Pricing1 from "../Pricing/Pricing1";
import Project3 from "../Project/Project3";
import Services4 from "../Services/Services4";
import Testimonial3 from "../Testimonial/Testimonial3";
const Home4 = () => {
    return (
        <div>
            <HeroBanner4
                subtitle="Hi, We are OrbitThink 👋"
                title="OrbitThink Tech Solution Partners"
                content="Streamline operations, increase efficiency, and drive growth with <br> our innovative IT solutions."
                btnone="Get A Quote"
                btnoneurl="/contact"
                btntwo="Start Now"
                btntwourl="/service"
                shape1="/assets/img/hero/hero4-image-shape.png"
            ></HeroBanner4>
            <About4
                image1="/assets/img/about/ab2.png"
                image2="/assets/img/about/ab1.png"
                image3="/assets/img/about/ab3.png"
                // shape1="/assets/img/shapes/about3-shape1.png"
                shape1="/assets/img/icons/orbitCircle.png"
                subTitle="About Us 👋"
                Title="Innovative IT Solutions For Modern Businesses"
                content="Our journey began with a vision to empower businesses of all sizes with cutting-edge technology solutions tailored to their unique needs. Our team of experienced professionals brings together a diverse range"
                expNum="25"
                expCon="Years Experience"
                featurelist={[
                    "Tech Solution",
                    "It Consulting",
                    "Cyber Security",
                ]}
                btnName="Read More"
                btnUrl="/about"
            ></About4>
            <Services4></Services4>
            <HowWork3></HowWork3>
            <Project3></Project3>
            <Pricing1></Pricing1>
            <Testimonial3></Testimonial3>
            <Blog4></Blog4>
            <Cta3></Cta3>
        </div>
    );
};

export default Home4;