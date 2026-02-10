import Link from "next/link";
import mainData from '../../../data/main-data.json';


const Mission1 = () => {
  const { mission } = mainData.aboutPage;
  return (
    <div className="solution sp bg1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> {mission.subtitle}</span>
              <h2>{mission.title}</h2>
              <div className="space16"></div>
              <p>{mission.content1}</p>
              <div className="space16"></div>
              <p>{mission.content2}</p>

              <div className="space30"></div>
              <div className="">
                <Link className="theme-btn1" href={mission.btn.href}>{mission.btn.label} <span><i className="bi bi-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="solution-images">
              <div className="image1">
                <img src={mission.images[0]} alt="" />
              </div>
              <div className="image2">
                <img src={mission.images[1]} alt="" />
              </div>
              <div className="image3">
                <img src={mission.images[2]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission1;