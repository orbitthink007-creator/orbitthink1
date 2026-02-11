'use client'
import Slider from "react-slick";
import { useContent } from "../../context/ContentContext";
import { useEffect, useRef } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Testimonial3 = () => {
  const { content } = useContent();
  const { testimonials } = content.home;
  const sliderRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  console.log("testimonials.list", testimonials.list)
  return (
    <div className="testimonial4 testimonial-2 position-relative bg6 section-padding" data-background="/assets/img/bg/testimonial4-bg.png" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto text-center">
            <motion.div
              className="heading4-w"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle2
                SubTitle={testimonials.subtitle}
                Title={testimonials.title}
              ></SectionTitle2>
            </motion.div>
          </div>
        </div>

        <div className="space60"></div>

        <div className="row">
          <motion.div
            className="col-lg-8 m-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="testimonial-sliders">
              <div className="slider-testimonial">

                <Slider ref={sliderRef} {...settings}>
                  {testimonials.list.map((item, i) => (
                    <div key={i} className="single-testimonial">
                      <div className="single-testimonial-nav">
                        <img src={item.icon} alt="" style={{ objectFit: 'contain', height: '100px', width: '80px' }} />
                      </div>
                      <h5>{item.desc}</h5>
                      <div className="author">
                        <a href="#">{item.title}</a>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </Slider>

              </div>
              <div className="testimonial-arrows">
                <div onClick={previous} className="testimonial-prev-arrow">
                  <button><i className="bi bi-arrow-left"></i></button>
                </div>
                <div onClick={next} className="testimonial-next-arrow">
                  <button><i className="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial3;