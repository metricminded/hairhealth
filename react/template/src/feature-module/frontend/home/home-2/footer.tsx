import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressButton from "../../common/progress/progress";
import Cursor from "../../common/cursor/cursor";
import ImageWithBasePath from "../../../../components/imageWithBasePath";
import { Link } from "react-router-dom";

const Home1Footer: React.FC = () => {
  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {" "}
      {/* Footer */}
      <footer className="footer footer-one">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <Link to="/index">
                      <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Effortlessly schedule your medical appointments with
                      Doccure. Connect with healthcare professionals, manage
                      appointments &amp; prioritize your well being{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Company</h2>
                      <ul>
                        <li>
                          <Link to="/index">Home</Link>
                        </li>
                        <li>
                          <Link to="#">Specialities</Link>
                        </li>
                        <li>
                          <Link to="#">Video Consult</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Specialities</h2>
                      <ul>
                        <li>
                          <Link to="#">Neurology</Link>
                        </li>
                        <li>
                          <Link to="#">Cardiologist</Link>
                        </li>
                        <li>
                          <Link to="#">Dentist</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4">
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>
                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <p>
                            <i className="isax isax-location" /> 3556 Beech
                            Street, USA
                          </p>
                        </div>
                        <div className="footer-address">
                          <p>
                            <i className="feather-phone-call" /> +1 315 369 5943
                          </p>
                        </div>
                        <div className="footer-address mb-0">
                          <p>
                            <i className="feather-mail" /> doccure@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-7">
                <div className="footer-widget">
                  <h2 className="footer-title">Join Our Newsletter</h2>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                      <button type="submit" className="btn">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-x-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-pinterest" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright © 2025 Doccure. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms and Conditions</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
      </footer>
      {/* /Footer */}
      <ProgressButton />
      <Cursor />
    </>
  );
};

export default Home1Footer;
