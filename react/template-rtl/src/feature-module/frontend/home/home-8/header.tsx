import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../components/imageWithBasePath";
import { Dropdown } from "primereact/dropdown";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { ChevronRightIcon } from "primereact/icons/chevronright";
import NavLinks from "../../common/nav";
import DarkModeToggle from "../../dark-mode";

const Home8Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const countries = [
    { name: "English", code: "AU", img: "assets/img/flags/us.png" },
    { name: "Japan", code: "BR", img: "assets/img/flags/jp.png" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const selectedCountryTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="d-flex align-items-center">
          <ImageWithBasePath
            src={option.img}
            className="flag-width"
            alt="Logo"
          />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="d-flex align-items-center">
        <ImageWithBasePath src={option.img} className="flag-width" alt="Logo" />
        <div>{option.name}</div>
      </div>
    );
  };

  const onHandleMobileMenu = () => {
    document.documentElement.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    document.documentElement.classList.remove("menu-opened");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className={`header header-fixed header-fourteen header-twelve header-thirteen header-prime 
        ${isScrolled ? "header-fixed pharmacy-header" : ""}`}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link
                id="mobile_btn"
                to="#"
                onClick={onHandleMobileMenu}
              >
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
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={onhandleCloseMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <NavLinks />
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="header-theme me-3">
                <DarkModeToggle />
              </li>
              <li className="flag-nav">
                <div className="flag-img card flex justify-content-center">
                  <Dropdown
                    variant="filled"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.value)}
                    options={countries}
                    optionLabel="name"
                    valueTemplate={selectedCountryTemplate}
                    itemTemplate={countryOptionTemplate}
                    dropdownIcon={(opts) => {
                      const { ref, ...restIconProps } = opts.iconProps || {};
                      return opts.overlayVisible ? (
                        <ChevronRightIcon {...restIconProps} />
                      ) : (
                        <ChevronDownIcon {...restIconProps} />
                      );
                    }}
                  />
                </div>
              </li>
              <li className="login-in">
                <Link to="/pages/login-email" className="btn sign-btn">
                  <i className="fa-solid fa-lock" />
                  Sign In
                </Link>
              </li>
              <li className="login-in">
                <Link to="/signup" className="btn reg-btn">
                  <i className="fa-solid fa-user" />
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
};

export default Home8Header;
