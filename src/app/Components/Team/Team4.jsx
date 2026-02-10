import mainData from '../../../data/main-data.json';

const Team4 = () => {
  const { team } = mainData.aboutPage;
  return (
    <div className="team2 team-page sp">
      <div className="container">
        <div className="space30"></div>
        <div className="row">

          {team.list.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="team-box">
                <div className="image-area">
                  <div className="image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="icon-area">
                    <ul>
                      <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                      <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                      <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                      <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="heading1">
                  <h4><a href="#">{item.title}</a></h4>
                  <div className="space10"></div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>


      </div>
    </div>
  );
};

export default Team4;