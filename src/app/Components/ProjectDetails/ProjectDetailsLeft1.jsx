import { useContent } from "@/app/context/ContentContext";
import Link from "next/link";


const ProjectDetailsLeft1 = ({ projectId }) => {
    const { content } = useContent();
    const project = content.homeTwo?.projects?.list?.find(p => p.id === projectId) ||
        content.home?.projects?.list?.find(p => p.id === projectId);

    if (!project) {
        return <div className="container sp">Project not found</div>;
    }

    const details = project.details || {
        fullTitle: project.title,
        fullDesc: project.desc,
        fullImage: "/assets/img/others/project-details-img1.png",
        processTitle: "Our Implementation Process",
        processList: ["Needs Assessment", "Solution Design", "Data Migration", "Change Management", "Testing & Quality", "Go Live & Support"],
        benefitsTitle: "Benefits of Implementation",
        benefitsList: [
            { title: "Improved Efficiency", desc: "Streamline business processes and workflows, reducing manual effort and improving productivity." },
            { title: "Improved Efficiency", desc: "Streamline business processes and workflows, reducing manual effort and improving productivity." }
        ]
    };

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="sidebar-box-area mb-40">
                            <h3>Search by Keyword</h3>
                            <div className="search">
                                <input type="text" placeholder="Type keyword here" />

                                <div className="button">
                                    <button><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Tags</h3>
                            <ul className="tags">
                                <li><a href="#">Software Development</a></li>
                                <li><a href="#">Cloud </a></li>
                                <li><a href="#">It Solution</a></li>
                                <li><a href="#">Data Analytics Service</a></li>
                                <li><a href="#">Technology</a></li>
                                <li><a href="#">Custom Development</a></li>
                                <li><a href="#">Cyber Security</a></li>
                                <li><a href="#">Consulting Service</a></li>
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Get A Free Quote</h3>
                            <div className="contact-form">
                                <form action="#">

                                    <div className="single-input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>

                                    <div className="single-input">
                                        <input type="email" placeholder="Email Address" />
                                    </div>

                                    <div className="single-input">
                                        <input type="number" placeholder="Phone Number" />
                                    </div>

                                    <div className="single-input">
                                        <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                                    </div>

                                    <div className="button">
                                        <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src={details.fullImage} alt={project.title} />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>{details.fullTitle}</h2>
                                        <div className="space16"></div>
                                        <p>{details.fullDesc}</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>{details.processTitle}</h5>
                                                <div className="space16"></div>
                                                <div className="boxs-area">
                                                    <ul>
                                                        {details.processList?.slice(0, 3).map((item, i) => (
                                                            <li key={i}><span className="check"><i className="bi bi-check-lg"></i></span> {item}</li>
                                                        ))}
                                                    </ul>
                                                    <ul>
                                                        {details.processList?.slice(3).map((item, i) => (
                                                            <li key={i}><span className="check"><i className="bi bi-check-lg"></i></span> {item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>{details.benefitsTitle}</h5>
                                                <div className="space16"></div>
                                                <div className="row">
                                                    {details.benefitsList?.map((benefit, i) => (
                                                        <div key={i} className="col-lg-6 col-md-6">
                                                            <div className="project-details-box heading1">
                                                                <h4><Link href="#">{benefit.title}</Link></h4>
                                                                <div className="space16"></div>
                                                                <p>{benefit.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="space50"></div>

                            <div className="get-started-box">
                                <h3>Get Started with {project.title} Today</h3>
                                <div className="space16"></div>
                                <p>Ready to take your business to the next level with our solutions? Contact us today to learn more and how we can help you optimize your business operations for success.</p>
                                <div className="space30"></div>
                                <Link href="/contact" className="get-started-btn">Call Now <span><i className="bi bi-arrow-right"></i></span></Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsLeft1;