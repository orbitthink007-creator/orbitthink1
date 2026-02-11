'use client'
import Link from "next/link";
import { useContent } from "../../context/ContentContext";
import SectionTitle2 from "../Common/SectionTitle2";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Project3 = () => {
    const { content: mainData } = useContent();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { projects } = mainData.home;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <div className="project4 sp" ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <motion.div
                            className="heading4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle2
                                SubTitle={projects.subtitle}
                                Title={projects.title}
                            ></SectionTitle2>
                        </motion.div>
                    </div>
                </div>
                <div className="space30"></div>
                <motion.div
                    className="row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.list.map((item, i) => (
                        <motion.div key={i} className={item.addClass} variants={cardVariants}>
                            <div className={item.addClassActive}>
                                <div className="image">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        style={{ objectFit: 'cover', width: item.addClass.includes('col-lg-8') ? 770 : 370, height: '350px' }}
                                    />
                                </div>
                                <div className="heading4-w">
                                    {/* <h4><Link href={item.btnLink}>{item.title}</Link></h4> */}
                                    <h4><Link href={'#'}>{item.title}</Link></h4>
                                    <div className="space10"></div>
                                    <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </div>
    );
};

export default Project3;
