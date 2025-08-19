 
/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import logosvg from "../../assets/img/logo.svg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Search, 
  User, 
  Lock, 
  X, 
  UserCheck,
  Video,
  ShoppingCart
} from "react-feather";
import {
  Browser_categorie,
  logo_03,
  logo_15,
  logo_svg,
  logo_white,
} from "./imagepath";

import Chart from "./patients/dashboard/chart";
import Notification from "./patients/dashboard/notification";
import NavLinks from "./common/nav";
import ImageWithBasePath from "../../components/imageWithBasePath";
import DarkModeToggle from "./dark-mode";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchField, setSearchField] = useState(false);
  const ToggleSearch = () => {
    setSearchField(!searchField);
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const pathnames = window.location.pathname;

  const OnHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const OnhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  //nav transparent

  const [_button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const ShowButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    ShowButton();
  }, []);
  window.addEventListener("resize", ShowButton);

  const ChangeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBackground);
  useEffect(() => {
    const HandleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);
  return (
    <>
      {!pathnames.includes("home1") && (
        <header
          className={`header ${
            pathnames.includes("/index-11")
              ? "header-fixed header-fourteen header-sixteen"
              : pathnames.includes("/index-10")
              ? "header-fixed header-fourteen header-fifteen"
              :  pathnames.includes("/index-9")
              ? "header-fixed header-fourteen"
              :  pathnames.includes("/index-8")
              ? "header-fixed header-fourteen header-twelve header-thirteen"
              :  pathnames.includes("/index-7")
              ? "header-fixed header-fourteen header-twelve"
              :  pathnames.includes("/index-6")
              ? "header-trans header-eleven"
              :  pathnames.includes("/index-4")
              ? "header-trans custom"
              :  pathnames.includes("/index-5")
              ? "header header-fixed header-ten"
              :  pathnames.includes("home")
              ? "header-trans header-two"
              :  pathnames.includes("/index-13")
              ? "header header-custom header-fixed header-ten home-care-header"
              :  pathnames.includes("/Pharmacy-index")
              ? "header header-one"
              : "header header-custom header-fixed inner-header relative"
          } 
           ${isScrolled ? 'pharmacy-header' : ''} `}
          style={
            pathnames.includes("/index-6") && navbar
              ? { background: "rgb(30, 93, 146)" }
              : pathnames.includes("/index-10") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : pathnames.includes("/index-11") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : pathnames.includes("/index-4") && navbar
              ? { background: "rgb(43, 108, 203)" }
              : pathnames.includes("/index-9") && navbar
              ? { background: "rgb(43, 108, 203)" }
              : pathnames.includes("/index-2") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" }
          }
        >
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg header-nav ${
                pathnames.includes("home1") ? "nav-transparent" : ""
              }`}
            >
              <div className="navbar-header">
                <Link
                  to="#"
                  id="mobile_btn"
                  onClick={() => OnHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Link>
                <Link to="/home-2" className="navbar-brand logo">
                  {pathnames.includes("/index-5") ? (
                    <img src={logo_white} className="img-fluid" alt="Logo" />
                  ) : pathnames.includes(
                      "/react/template/Pharmacy/Pharmacy-index"
                    ) ? (
                    <div className="browse-categorie">
                      <div className="dropdown categorie-dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <img src={Browser_categorie} alt="" /> Browse Categories
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="#">
                            Ayush
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Covid Essentials
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Devices
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Glucometers
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={
                        pathnames === "/react/template/index-6" ||
                        pathnames === "/react/template/index-4"
                          ? logosvg
                          : pathnames === "/react/template/index-11"
                          ? logo_15
                          : pathnames === "/react/template/index-10"
                          ? logo_15
                          : pathnames === "/react/template/index-9"
                          ? logo_03
                          : pathnames === "/react/template/index-7"
                          ? logo_svg
                          : pathnames == "/react/template/index-13"
                          ? logo_white
                          : logosvg
                      }
                      className="img-fluid"
                      alt="Logo"
                    />
                  )}
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/home-2" className="menu-logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                  <Link
                    to="#"
                    id="menu_close"
                    className="menu-close"
                    onClick={() => OnhandleCloseMenu()}
                  >
                    <X size={20} />
                  </Link>
                </div>
                  
                <ul
                  className={`main-nav ${
                    pathnames.includes("home4") ? "white-font" : ""
                  }`}
                >
                  <NavLinks/>
                  
                      
                </ul>
              </div>
              
              {pathnames.includes("/index-6") ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                    <Link
                      className={`nav-link header-login ${
                        pathnames.includes("home6") ? "white-bg" : ""
                      }`}
                      to="/login"
                    >
                      <i className="me-2">
                        <Lock size={16} />
                      </i>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link header-login btn-light-blue"
                      to="/login"
                    >
                      <i className="me-2">
                        <User size={16} />
                      </i>
                      Login
                    </Link>
                  </li>
                </ul>
              ) : null}
              {pathnames.includes("/index-2") &&
              !pathnames.includes("/index-11") &&
              !pathnames.includes("/index-5") &&
              !pathnames.includes("/index-6") &&
              !pathnames.includes("/index-7") &&
              !pathnames.includes("/index-8") &&
              !pathnames.includes("/index-9") &&
              !pathnames.includes("/index-4") ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                    <Link
                      className={`nav-link header-login ${
                        pathnames.includes("home4") ? "white-bg" : ""
                      }`}
                      to="/login"
                    >
                      login / Signup
                    </Link>
                  </li>
                </ul>
              ) : null}

              {pathnames.includes("/index-5") ||
              pathnames.includes("/index-7") ||
              pathnames.includes("/index-9") ? (
                <ul className="nav header-navbar-rht">
                  {pathnames.includes("/index-11") ||
                  pathnames.includes("home7") ||
                  pathnames.includes("home9") ? (
                    <li className="searchbar searchbar-fourteen me-2">
                      <Link to="#">
                        <i>
                          <Search size={16} />
                        </i>
                      </Link>
                      <div className="togglesearch">
                        <form>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn btn-primary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  ) : null}

                  <li
                    className={`${
                      pathnames.includes("/index-7") || "/index-9"
                        ? "login-in-fourteen"
                        : "register-btn"
                    }`}
                  >
                    <Link
                      to="/pages/login-email"
                      className={["/index-9", "/index-7"].includes(pathnames) ? "btn reg-btn" : "btn log-btn"}
                    >
                      <i className="me-2">
                        {pathnames.includes("home7") ? (
                          <User size={16} />
                        ) : (
                          <Lock size={16} />
                        )}
                      </i>
                      Log In
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathnames.includes("/index-7") || "/index-9"
                        ? "login-in-fourteen"
                        : "register-btn"
                    }`}
                  >
                    <Link
                      to="/signup"
                      className={`${
                        pathnames.includes("/index-7") || "/index-9"
                          ? "btn btn-primary reg-btn reg-btn-fourteen"
                          : "btn reg-btn"
                      }`}
                    >
                      <i className="me-2">
                        <User size={16} />
                      </i>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null}
              {(!pathnames.includes("/patient/search-doctor1") &&
                pathnames.includes("patient")) ||
              (pathnames.includes("Pharmacy") &&
                !pathnames.includes("/Pharmacy/Pharmacy-index")) ? (
                <>
                <ul className="nav header-navbar-rht">
                <li className="searchbar">
                      <Link to="#" onClick={ToggleSearch}>
                      <Search size={20} />
                      </Link>
                      <div className={
                      searchField
                        ? "togglesearch d-block"
                        : "togglesearch d-none"
                    } >
                        <form>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  <li className="header-theme noti-nav">
                    <DarkModeToggle />
                  </li>
                  <Notification />
                  
                  {/* Messages */}
                  <li className="nav-item noti-nav me-3 pe-0">
                    <Link
                      to="/patient/patient-chat"
                      className="dropdown-toggle nav-link active-dot active-dot-success p-0"
                    >
                      <i className="isax isax-message-2" />
                    </Link>
                  </li>
                  {/* /Messages */}
                  {/* Cart */}
                  <Chart />
                  {/* /Cart */}
                  {/* User Menu */}
                  <li className="nav-item dropdown has-arrow logged-item">
                    <Link
                      to="#"
                      className="nav-link ps-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="user-img">
                        <ImageWithBasePath
                          className="rounded-circle"
                          src="assets/img/doctors-dashboard/profile-06.jpg"
                          width={31}
                          alt="Darren Elder"
                        />
                      </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <ImageWithBasePath
                            src="assets/img/doctors-dashboard/profile-06.jpg"
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Hendrita Hayes</h6>
                          <p className="text-muted mb-0">Patient</p>
                        </div>
                      </div>
                      <Link className="dropdown-item" to="/patient/dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/patient/profile">
                        Profile Settings
                      </Link>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </div>
                  </li>
                  {/* /User Menu */}
                </ul>
                </>
              ) : pathnames.includes("doctor") &&
                !pathnames.includes("/doctor/doctor-register") &&
                !pathnames.includes("/patient/search-doctor1") &&
                !pathnames.includes("/pages/doctor-signup") &&
                !pathnames.includes("/doctor-blog") &&
                !pathnames.includes("/doctor-edit-blog") &&
                !pathnames.includes("/doctor-pending-blog") &&
                !pathnames.includes("/blog/doctor-add-blog") ? (
                  <>

                
                <ul className="nav header-navbar-rht">
                <li className="searchbar">
                      <Link to="#" onClick={ToggleSearch}>
                      <Search size={20} />
                      </Link>
                      <div className={
                      searchField
                        ? "togglesearch d-block"
                        : "togglesearch d-none"
                    } >
                        <form>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  <li className="header-theme noti-nav">
                    <DarkModeToggle />
                  </li>
                  <Notification />
                  
                  {/* Messages */}
                  <li className="nav-item noti-nav me-3 pe-0">
                    <Link
                      to="/doctor/chat-doctor"
                      className="dropdown-toggle nav-link active-dot active-dot-success p-0"
                    >
                      <i className="isax isax-message-2" />
                    </Link>
                  </li>
                  {/* /Messages */}
                  {/* Cart */}
                  <Chart />
                  {/* /Cart */}
                  {/* User Menu */}
                  <li className="nav-item dropdown has-arrow logged-item">
                    <Link
                      to="#"
                      className="nav-link ps-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="user-img">
                        <ImageWithBasePath
                          className="rounded-circle"
                          src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                          width={31}
                          alt="Darren Elder"
                        />
                      </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <ImageWithBasePath
                            src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Dr Edalin Hendry</h6>
                          <p className="text-muted mb-0">Doctor</p>
                        </div>
                      </div>
                      <Link className="dropdown-item" to="/doctor/doctor-dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/doctor/profile-setting">
                        Profile Settings
                      </Link>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </div>
                  </li>
                  {/* /User Menu */}
                </ul>

                  </>
              ) :  
              <ul className="nav header-navbar-rht">
              <li className="searchbar">
                      <Link to="#" onClick={ToggleSearch}>
                      <Search size={20} />
                      </Link>
                      <div className={
                      searchField
                        ? "togglesearch d-block"
                        : "togglesearch d-none"
                    } >
                        <form>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="header-theme noti-nav">
                    <DarkModeToggle />
                  </li>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <Lock size={16} className="me-1" />
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                  >
                    <UserCheck size={16} className="me-1" />
                    Register
                  </Link>
                </li>
              </ul>}
              {pathnames.includes("/index-8") ? (
                <ul className="nav header-navbar-rht">
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link to="/pages/login-email" className="btn reg-btn">
                      Log In
                    </Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link to="/signup" className=" reg-btn-thirteen">
                      <span>Sign Up</span>
                      <div className="user-icon-header">
                        <i>
                          <User size={16} />
                        </i>
                      </div>
                    </Link>
                  </li>
                </ul>
              ) : pathnames.includes("/index-10") ? (
                <ul className="nav header-navbar-rht">
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link to="/pages/login-email" className="btn reg-btn">
                      <i className="me-2">
                        <Video size={16} />
                      </i>
                      Live Demo
                    </Link>
                  </li>
                  <li className="login-in-fourteen">
                    <Link
                      to="/signup"
                      className="btn btn-primary reg-btn reg-btn-fourteen"
                    >
                      <i className="me-2">
                        <ShoppingCart size={16} />
                      </i>
                      Buy Template
                    </Link>
                  </li>
                </ul>
              ) : null}
              {pathnames.includes("/index-11") ? (
                <ul className="nav header-navbar-rht">
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                  <li className="login-in-sixteen">
                    <Link to="/pages/login-email" className="btn reg-btn">
                      <i className="me-2">
                        <Lock size={16} />
                      </i>
                      Login<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                  <li className="login-in-sixteen">
                    <Link
                      to="/signup"
                      className="btn btn-primary reg-btn reg-btn-sixteen"
                    >
                      <i className="me-2">
                        <User size={16} />
                      </i>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null}

              {pathnames.includes("/index-13") ? (
                <ul className="nav header-navbar-rht">
                  <li className="register-btn">
                    <Link to="/pages/login-email" className="btn log-btn">
                      <Lock size={16} className="me-2" />Login
                    </Link>
                  </li>
                  <li className="register-btn">
                    <Link to="/signup" className="btn reg-btn">
                      <User size={16} className="me-2" />Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null}

              {/* {pathnames == "/react/template/index-13" ? (
                <ul class="nav header-navbar-rht">
                  <li class="register-btn">
                    <Link to="/pages/login-email" class="btn log-btn">
                      <i class="feather-lock"></i>Login
                    </Link>
                  </li>
                  <li class="register-btn">
                    <Link to="/signup" class="btn reg-btn">
                      <i class="feather-user"></i>Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null} */}
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
