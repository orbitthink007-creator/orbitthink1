import mainData from '../../../data/main-data.json';

const Cta3 = () => {
    const { cta } = mainData.home;
    return (
        <div className="cta4">
            <div className="container">
                <div className="cta-bg-area">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="heading4-w">
                                <h2 className="title tg-element-title" dangerouslySetInnerHTML={{ __html: cta.title }}></h2>

                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="email" placeholder={cta.placeholder} />
                                        <div className="button">
                                            <button type="submit" className="theme-btn7">{cta.buttonText} <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="shape1 shape-animaiton3" src={cta.shape1} alt="" />
                    <img className="shape2 shape-animaiton3" src={cta.shape2} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Cta3;