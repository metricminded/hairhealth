import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../common/nav";
import ImageWithBasePath from "../../../components/imageWithBasePath";

const PharmacyHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const OnHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const OnhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {" "}
      {/* Header */}
      <header className={`${isScrolled ? 'pharmacy-header' : ''} header`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => OnHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-1" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo-15.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="browse-categorie">
                <div className="dropdown categorie-dropdown">
                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                        <ImageWithBasePath src="assets/img/icons/browse-categorie.svg" alt="Img" /> Browse Categories
                    </Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">Ayush</Link>
                        <Link className="dropdown-item" to="#">Covid Essentials</Link>
                        <Link className="dropdown-item" to="#">Devices</Link>
                        <Link className="dropdown-item" to="#">Glucometers</Link>
                    </div>
                </div>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-1" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={() => OnhandleCloseMenu()}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <NavLinks />
               
              </ul>
            </div>
           
          </nav>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
};

export default PharmacyHeader;
