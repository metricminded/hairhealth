import React, { useState, useEffect } from "react";
import NavLinks from "../../common/nav";
import ImageWithBasePath from "../../../../components/imageWithBasePath";
import { Link } from "react-router-dom";


const Home1Header: React.FC = () => {

 const [headerClass, setHeaderClass] = useState(
    "header header-custom header-fixed header-one home-head-one"
  );
  
   useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
  
        if (scrollPosition > scrollThreshold) {
          setHeaderClass("header header-custom header-fixed inner-header relative fixed pharmacy-header");
        } else {
          setHeaderClass("header header-custom header-fixed inner-header relative");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  const onHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onHandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={onHandleMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-1" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-1" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo-01.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#"  onClick={onHandleCloseMenu}>
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                    <NavLinks />
                  </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="register-btn">
                <Link to="/register" className="btn btn-dark reg-btn">
                  <i className="feather icon-user" />
                  Register
                </Link>
              </li>
              <li className="register-btn">
                <Link to="/login" className="btn btn-primary log-btn">
                  <i className="feather icon-lock" />
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Home1Header;
