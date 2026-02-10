'use client'
import Link from "next/link";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About4 = ({ image1, image2, image3, shape1, subTitle, Title, content, expNum, expCon, featurelist, btnName, btnUrl }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <div className="about4 sp" ref={ref}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div
                            className="images"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="img1 shape-animaiton4">
                                <img src={"/assets/img/bg/about3-bg.png"} alt="" />
                            </div>
                            <motion.div className="img2" variants={imageVariants}>
                                <img src={image1} alt="" />
                            </motion.div>
                            <motion.div className="img3" variants={imageVariants}>
                                <img src={image2} alt="" />
                            </motion.div>
                            <motion.div className="img4" variants={imageVariants}>
                                <img src={image3} alt="" />
                            </motion.div>
                            <motion.div
                                className="img5"
                                variants={imageVariants}
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    rotate: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                            >
                                <img src={shape1} alt="" />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <motion.div
                            className="heading4"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <motion.span className="span" variants={textVariants}>
                                {subTitle}
                            </motion.span>
                            <motion.h2 className="title tg-element-title" variants={textVariants}>
                                {Title}
                            </motion.h2>
                            <div className="space16"></div>
                            <motion.p variants={textVariants}>
                                {content}
                            </motion.p>

                            <div className="space30"></div>
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <motion.div className="counter-box" variants={textVariants}>
                                        <h3>{expNum}</h3>
                                        <p>{expCon}</p>
                                    </motion.div>
                                </div>
                                <div className="col-md-4">
                                    <motion.ul className="list" variants={textVariants}>
                                        {featurelist?.map((item, index) => (
                                            <li key={index}><span><i className="bi bi-check-lg"></i></span> {item}</li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </div>
                            <div className="space30"></div>
                            <motion.div variants={textVariants}>
                                <Link className="theme-btn5" href={btnUrl}>
                                    {btnName} <span><i className="bi bi-arrow-right"></i></span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About4;
