'use client';
import Link from "next/link";
import { useContent } from "../../context/ContentContext";

const About6 = () => {
  const { content: mainData } = useContent();
  const { hero } = mainData.aboutPage;
  return (
    <div className="about2 about-page-sec sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about2-images">
              <div className="image1" data-aos="zoom-in-right" data-aos-duration="800">
                <img src={hero.image1} alt="" style={{ height: '134px', width: '178px', objectFit: 'fill' }} />
              </div>
              <div className="image2 image-anime">
                <img src={hero.image2} alt="" style={{ height: '400px', width: '470px', objectFit: 'fill' }} />
              </div>
              <div className="image3" data-aos="zoom-in-left" data-aos-duration="900">
                <img src={hero.image3} alt="" style={{ height: '134px', width: '178px', objectFit: 'fill' }} />
              </div>
              <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
                <h3>{hero.experienceNum}</h3>
                <p dangerouslySetInnerHTML={{ __html: hero.experienceTitle }}></p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="heading1">
              <span style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}
                data-aos="zoom-in-left" data-aos-duration="700">
                <img src="/assets/img/logo/loader.png" alt="" style={{ height: '16px', width: '18px' }} /> {hero.subTitle}</span>
              <h2 className="title tg-element-title">{hero.title}</h2>
              <div className="space16"></div>
              <p data-aos="fade-up-left" data-aos-duration="700">{hero.content}</p>

              <div className="space10"></div>

              <div className="porgress-line-all">
                <div className="progress-line">
                  <h6>{hero.counName1}</h6>
                  <div id="progress1">
                    <div className="percentCount percentCount6">{hero.CounNum1}</div>
                    <div className="progressbar"><div className="proggress2"></div></div>
                  </div>
                </div>
                <div className="progress-line">
                  <h6>{hero.counName2}</h6>
                  <div id="progress2" >
                    <div className="percentCount percentCount6">{hero.CounNum2}</div>
                    <div className="progressbar"><div className="proggress2"></div></div>
                  </div>
                </div>
              </div>

              <div className="space30"></div>
              <div className="button" data-aos="fade-up-left" data-aos-duration="800">
                <Link className="theme-btn1" href={hero.btn.href}>{hero.btn.label} <span><i className="bi bi-arrow-right"></i></span></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About6;