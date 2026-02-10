import Link from "next/link";
import mainData from '../../../data/main-data.json';

const Vission1 = () => {
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
                    <img src={vision.images[0]} alt="" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <img src={vision.images[1]} alt="" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <img src={vision.images[2]} alt="" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> {vision.subtitle}</span>
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