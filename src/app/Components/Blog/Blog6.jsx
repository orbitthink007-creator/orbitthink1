'use client'
import Link from "next/link";
import { useContent } from "../../context/ContentContext";


const Blog6 = () => {
  const { content } = useContent();
  const blogPage = content.blogPage ?? null;
  return (
    <div className="blog blog-page sp">
      <div className="container">
        <div className="row">
          {blogPage?.list?.map((post, index) => (
            <div key={index} className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                  <img src={post.image} alt=""
                    style={{ height: '410px', width: '570px', objectFit: 'cover' }}
                  />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> {post.date}</a>
                    <a href="#" className="date outhor"><img src="/assets/img/icons/user.png" alt="" /> {post.author}</a>
                  </div>
                  <h4><Link href="#">{post.title}</Link></h4>
                  <div className="space16"></div>
                  <p>{post.desc}</p>
                  <div className="space16"></div>
                  <Link href="#" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog6;