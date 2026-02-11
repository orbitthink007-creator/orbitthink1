'use client';
import Link from "next/link";
import { useContent } from "../../context/ContentContext";

const Vission1 = () => {
  const { content: mainData } = useContent();
  const { vision } = mainData.aboutPage;
  return (
    <div className="solution about-solution sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="images">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image">
                    <img src={vision.images[0]} alt="" style={{ height: '320px', width: '600px', objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <img src={vision.images[1]} alt="" style={{ height: '250px', width: '270px', objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <img src={vision.images[2]} alt="" style={{ height: '250px', width: '270px', objectFit: 'contain' }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span"><img src="/assets/img/logo/loader.png" alt="" style={{ height: '16px', width: '18px' }} /> {vision.subtitle}</span>
              <h2>{vision.title}</h2>
              <div className="space16"></div>
              <p>{vision.content}</p>

              {vision.items.map((item, index) => (
                <div key={index} className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">{item.title}</a></h3>
                    <div className="space10"></div>
                    <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  </div>
                </div>
              ))}

              <div className="space30"></div>
              <div className="">
                <Link className="theme-btn1" href={vision.btn.href}>{vision.btn.label} <span><i className="bi bi-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vission1;