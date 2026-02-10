'use client';
import Link from "next/link";
import { useContent } from "../../context/ContentContext";

const Blog4 = () => {
    const { content: mainData } = useContent();
    const { blog } = mainData.home;
    return (
        <div className="blog4 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading4">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{blog.subtitle}</span>
                            <h2 className="title tg-element-title">{blog.title}</h2>
                        </div>
                    </div>
                </div>

                <div className="space30"></div>
                <div className="row">
                    {blog.posts.map((post, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="blog4-box" data-aos="zoom-in-up" data-aos-duration="900">
                                <div className="image image-anime">
                                    <img src={post.image} alt="" />
                                </div>
                                <div className="heading4">
                                    <div className="tags">
                                        <a href="#" className="date"><img src="/assets/img/icons/date3.png" alt="" /> {post.date}</a>
                                        <a href="#" className="date outhor"><img src="/assets/img/icons/blog-icon1.png" alt="" /> {post.author}</a>
                                    </div>
                                    <h3><Link href={post.url}>{post.title}</Link></h3>
                                    <div className="space16"></div>
                                    <p>{post.desc}</p>
                                    <div className="space16"></div>
                                    <Link href={post.url} className="learn">{post.readMore} <span><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog4;