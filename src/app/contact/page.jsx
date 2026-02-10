import BreadCumb from "../Components/Common/BreadCumb";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import mainData from '../../data/main-data.json';

const Contact = () => {
    const { contactPage } = mainData;
    return (
        <div>
            <BreadCumb Title={contactPage.title}></BreadCumb>
            <MarqueeText></MarqueeText>
            <div className="space100"></div>
            <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-boxs">
                                <div className="heading1">
                                    <h2>{contactPage.title}</h2>
                                    <div className="space16"></div>
                                    <p dangerouslySetInnerHTML={{ __html: contactPage.desc }}></p>
                                </div>
                                {contactPage.info.map((item, index) => (
                                    <div key={index} className="contact-box">
                                        <div className="icon">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>{item.title}</h5>
                                            <a href={item.href} className="text" dangerouslySetInnerHTML={{ __html: item.text }}></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder={contactPage.form.firstName} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder={contactPage.form.lastName} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder={contactPage.form.email} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" placeholder={contactPage.form.phone} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder={contactPage.form.subject} />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder={contactPage.form.message}></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">{contactPage.form.btn} <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space100"></div>

            <div className="contact-map-page">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>

        </div>

    );
};

export default Contact;