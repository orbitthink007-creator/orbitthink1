'use client'
import Link from "next/link";
import Slider from "react-slick";
import { motion } from 'framer-motion';

const HeroBanner4 = ({ subtitle, title, content, btnone, btnoneurl, btntwo, btntwourl, shape1 }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <div className="hero4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              className="main-heading"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="span" variants={itemVariants}>
                {subtitle}
              </motion.span>
              <motion.h1 variants={itemVariants}>
                {title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <div className="space30"></div>
              <motion.div className="buttons" variants={itemVariants}>
                <Link className="theme-btn5" href={btnoneurl}>
                  {btnone} <span><i className="bi bi-arrow-right"></i></span>
                </Link>
                <Link className="theme-btn6" href={btntwourl}>
                  {btntwo} <span><i className="bi bi-arrow-right"></i></span>
                </Link>
              </motion.div>

              <motion.div className="slider-area" variants={itemVariants}>
                <h3>TRUSTED BY LEADING BRAND</h3>
                <div className="logo-slider owl-carousel hero_gap_4">
                  <Slider {...settings}>
                    <div className="single-slider">
                      <img src="/assets/img/logo/slider-img1.png" alt="" />
                    </div>
                    <div className="single-slider">
                      <img src="/assets/img/logo/slider-img2.png" alt="" />
                    </div>
                    <div className="single-slider">
                      <img src="/assets/img/logo/slider-img3.png" alt="" />
                    </div>
                    <div className="single-slider">
                      <img src="/assets/img/logo/slider-img4.png" alt="" />
                    </div>
                  </Slider>
                </div>
              </motion.div>

              <motion.img
                className="image-shape shape-animaiton3"
                src={shape1}
                alt=""
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="main-image"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img src="/assets/img/hero/hero4-img.png" alt="" style={{ objectFit: 'contain', height: '542px', width: '694px' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner4;
