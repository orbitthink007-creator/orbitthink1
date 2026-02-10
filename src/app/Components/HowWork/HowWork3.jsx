'use client'
import Link from 'next/link';
import mainData from '../../../data/main-data.json';
import SectionTitle2 from '../Common/SectionTitle2';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowWork3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { process } = mainData.home;

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
        <div className="work4 sp" ref={ref}>
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
                                SubTitle={process.subtitle}
                                Title={process.title}
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

                    {process.list.map((item, i) => (
                        <motion.div key={i} className="col-lg-4 col-md-6" variants={cardVariants}>
                            <div className={item.addClass}>
                                <span className="after">{item.subtitle}</span>
                                <h4><Link href={item.btnLink}>{item.title}</Link></h4>
                                <div className="space16"></div>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </div>
    );
};

export default HowWork3;
