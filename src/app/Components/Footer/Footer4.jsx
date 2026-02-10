'use client';
import Link from "next/link";
import { useContent } from "../../context/ContentContext";

const Footer4 = () => {
  const { content: data } = useContent();
  const { footer } = data;
  return (
    <div className="footer4 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a href=""><img src={footer.logo} alt="" /></a>
              </div>
              <div className="space20"></div>
              <div className="heading4">
                <p>{footer.description}</p>
              </div>
              <ul className="social-icon">
                {footer.socialLinks.map((social, index) => (
                  <li key={index}><a href={social.href}><i className={social.icon}></i></a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>

              <ul className="menu-list">
                {footer.services.map((service, index) => (
                  <li key={index}><Link href={service.href}>{service.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                {footer.usefulLinks.map((link, index) => (
                  <li key={index}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              {footer.contact.map((item, index) => (
                <div className="contact-box" key={index}>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="pera">
                    <a href={item.href}>{item.text}</a>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

        <div className="space70"></div>
      </div>

      <div className="copyright-area _relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>{footer.copyright}</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                {footer.links.map((link, index) => (
                  <a key={index} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Footer4;