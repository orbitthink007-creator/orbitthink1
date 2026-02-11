'use client'
import Link from 'next/link';;
import { useContent } from "../../context/ContentContext";
import mainData from '../../../data/main-data.json';

const Project4 = () => {
    const { content } = useContent();
    const projectPage = content.projectPage ?? {};
    return (
        <div className="project-boxs-area sp">
            <div className="container">
                <div className="row">
                    {projectPage?.list?.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="project-page-box">
                                <div className="image">
                                    <img src={item.icon} alt="" style={{
                                        height: '370px',
                                        width: '370px',
                                        objectFit: 'cover'
                                    }} />
                                </div>
                                <div className="heading2">
                                    <h4><Link href="#">{item.title}</Link></h4>
                                    <Link href="#" className="learn">Learn More <span><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Project4;