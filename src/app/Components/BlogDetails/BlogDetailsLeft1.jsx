import { useContent } from "@/app/context/ContentContext";
import Link from "next/link";


const BlogDetailsLeft1 = ({ blogId }) => {
    const { content } = useContent();
    const blog = content.blog?.posts?.find(b => b.id === blogId) ||
        content.homeTwo?.blog?.posts?.find(b => b.id === blogId);

    if (!blog) {
        return <div className="container sp">Blog post not found</div>;
    }

    const details = blog.details || {
        title: blog.title,
        content: blog.desc,
        sections: []
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
                            <h3>Our Services</h3>
                            <ul className="features-list">
                                {content.home?.services?.list?.map((service, i) => (
                                    <li key={i}><Link href={service.btnLink}>{service.title} <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Recent Blogs</h3>
                            <div className="sidebar-blog-boxs">
                                {content.blog?.posts?.slice(0, 4).map((post, i) => (
                                    <div key={i} className="sidebar-blogs">
                                        <div className="">
                                            <div className="image">
                                                <img src={post.image} alt={post.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                        <div className="heading">
                                            <Link href={post.url} className="date"><img src="/assets/img/icons/date.png" alt="" /> {post.date}</Link>
                                            <h5><Link href={post.url}>{post.title}</Link></h5>
                                        </div>
                                    </div>
                                ))}
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
                            <h3>Download Brochure</h3>
                            <p>With a focus on excellence & commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                            <div className="download-btns">
                                <a className="daownload1" href="#">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                                <a className="daownload2" href="#">DOC Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="social-users">
                                        <ul>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon1.png" alt="" /> {blog.author}</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon2.png" alt="" /> {blog.date}</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon3.png" alt="" /> Category</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon4.png" alt="" /> 0 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>{details.title}</h2>
                                        <div className="space16"></div>
                                        <p>{details.content}</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            {details.sections?.map((section, i) => (
                                <article key={i}>
                                    <div className="details-post-area">
                                        <div className="heading1">
                                            <h5>{section.title}</h5>
                                            <div className="space16"></div>
                                            <p>{section.content}</p>
                                        </div>
                                    </div>
                                    <div className="space40"></div>
                                </article>
                            ))}

                            <div className="blog-details-border"></div>

                            <div className="tags-links">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tags">
                                            <ul>
                                                <li className="text">Tags:</li>
                                                <li className="tag-text"><a href="#">Business </a></li>
                                                <li className="tag-text"><a href="#">Services </a></li>
                                                <li className="tag-text"><a href="#">IT Solution </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="social">
                                            <ul>
                                                <li className="text">Social:</li>
                                                <li className="icon"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                                <li className="icon"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                <li className="icon"><a href="#"><i className="bi bi-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-details-border"></div>

                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">Submit Now <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>

                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsLeft1;