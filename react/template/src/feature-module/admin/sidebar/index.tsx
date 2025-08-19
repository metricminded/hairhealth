import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { Appcontext } from "../../admin/context/AppContext";
import { useLocation } from "react-router-dom";
import { 
  Home, 
  Layout, 
  Users, 
  UserPlus, 
  User, 
  Star, 
  Activity, 
  Settings, 
  FileText, 
  AlertTriangle, 
  File, 
  Code, 
  Table 
} from "react-feather";

const SidebarNav = () => {

  const location = useLocation();
  const pathname = location.pathname;

  const { setIsAuth } = useContext(Appcontext);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");
  const [isSideMenuNew2, setSideMenuNew2] = useState("");

  const toggleSidebar = (value: any) => {
    setSideMenu(value);
  };

  const toggleSidebarNew = (value: any) => {
    setSideMenuNew(value);
  };

  const toggleSidebarNew2 = (value: any) => {
    setSideMenuNew2(value);
  };

   
  const [isSidebarExpanded, _setSidebarExpanded] = useState(false);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);

  useEffect(() => {
    if (
      isMouseOverSidebar &&
      document.body.classList.contains("mini-sidebar")
    ) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);

  const HandleMouseEnter = () => {
    setMouseOverSidebar(true);
  };

  const HandleMouseLeave = () => {
    setMouseOverSidebar(false);
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
        id="sidebar"
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
      >
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              autoHide: "scroll",
              autoHideDelay: 1000,
              theme: "os-theme-dark"
            },
            overflow: {
              x: "hidden",
              y: "scroll"
            }
          }}
          style={{ height: "95vh" }}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className={pathname === "/admin" ? "active" : ""}>
                  <Link to="/admin">
                    <Home size={16} />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("/admin/appointment-list")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/admin/appointment-list">
                    <Layout size={16} /> <span>Appointments</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("specialities") ? "active" : ""}
                >
                  <Link to="/admin/specialities">
                    <Users size={16} /> <span>Specialities</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("doctor-list") ? "active" : ""}
                >
                  <Link to="/admin/doctor-list">
                    <UserPlus size={16} />
                    <span>Doctors</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("patient-list") ? "active" : ""}
                >
                  <Link to="/admin/patient-list">
                    <User size={16} /> <span>Patients</span>
                  </Link>
                </li>
                <li className={pathname?.includes("reviews") ? "active" : ""}>
                  <Link to="/admin/reviews">
                    <Star size={16} /> <span>Reviews</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("transactions-list") ? "active" : ""
                  }
                >
                  <Link to="/admin/transactions-list">
                    <Activity size={16} />
                    <span>Transactions</span>
                  </Link>
                </li>
                <li className={pathname?.includes("settings") ? "active" : ""}>
                  <Link to="/admin/settings">
                    <Settings size={16} /> <span> Settings</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "reports" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                    }
                  >
                    <FileText size={16} />
                    <span> Reports</span> <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "reports" ? (
                    <ul
                      style={{
                        display: isSideMenu == "reports" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/admin/invoicerepot"
                          className={
                            pathname?.includes("invoicerepot") ? "active" : ""
                          }
                        >
                          Invoice Report
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li className={pathname?.includes("profile") ? "active" : ""}>
                  <Link to="/admin/profile">
                    <UserPlus size={16} /> <span>Profile</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "authentication" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "authentication" ? "" : "authentication"
                      )
                    }
                  >
                    <FileText size={16} />{" "}
                    <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display:
                        isSideMenu == "authentication" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/login"
                        className={pathname?.includes("login") ? "active" : ""}
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Login{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/register"
                        className={
                          pathname?.includes("register") ? "active" : ""
                        }
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Register{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/forgotpassword"
                        className={
                          pathname?.includes("forgotpassword") ? "active" : ""
                        }
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Forgot Password{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/lockscreen"
                        className={
                          pathname?.includes("lockscreen") ? "active" : ""
                        }
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Lock Screen{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "errorpages" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "errorpages" ? "" : "errorpages"
                      )
                    }
                  >
                    <AlertTriangle size={16} /> <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "errorpages" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/404"
                        className={pathname?.includes("404") ? "active" : ""}
                        onClick={() => setIsAuth("admin")}
                      >
                        404 Error{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/500"
                        className={pathname?.includes("500") ? "active" : ""}
                        onClick={() => setIsAuth("admin")}
                      >
                        500 Error{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={pathname?.includes("blank-page") ? "active" : ""}
                >
                  <Link to="/admin/blank-page">
                    <File size={16} /> <span>Blank Page</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li
                  className={pathname?.includes("components") ? "active" : ""}
                >
                  <Link to="/admin/components">
                    <Settings size={16} /> <span>Components</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "forms" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "forms" ? "" : "forms")
                    }
                  >
                    <Layout size={16} /> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "forms" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/basic-input"
                        className={
                          pathname?.includes("basic-input") ? "active" : ""
                        }
                      >
                        Basic Inputs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-input-group"
                        className={
                          pathname?.includes("form-input-group") ? "active" : ""
                        }
                      >
                        Input Groups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-horizontal"
                        className={
                          pathname?.includes("form-horizontal") ? "active" : ""
                        }
                      >
                        Horizontal Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-vertical"
                        className={
                          pathname?.includes("form-vertical") ? "active" : ""
                        }
                      >
                        {" "}
                        Vertical Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-mask"
                        className={
                          pathname?.includes("form-mask") ? "active" : ""
                        }
                      >
                        Form Mask{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-validation"
                        className={
                          pathname?.includes("form-validation") ? "active" : ""
                        }
                      >
                        Form Validation{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "tables" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "tables" ? "" : "tables")
                    }
                  >
                    <Table size={16} />
                    <span> Tables </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "tables" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/tables-basic"
                        className={
                          pathname?.includes("tables-basic") ? "active" : ""
                        }
                      >
                        Basic Tables{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/data-tables"
                        className={
                          pathname?.includes("data-tables") ? "active" : ""
                        }
                      >
                        Data Table{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "multilevel" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "multilevel" ? "" : "multilevel"
                      )
                    }
                  >
                    <Code size={16} /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "multilevel" ? "block" : "none",
                    }}
                  >
                    <li className="submenu">
                      <Link
                        to="#"
                        className={isSideMenuNew == "levelone" ? "subdrop" : ""}
                        onClick={() =>
                          toggleSidebarNew(
                            isSideMenuNew == "levelone" ? "" : "levelone"
                          )
                        }
                      >
                        {" "}
                        <span>Level 1</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      <ul
                        style={{
                          display:
                            isSideMenuNew == "levelone" ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link
                            to="#"
                            className={
                              isSideMenuNew2 == "leveltwo" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarNew2(
                                isSideMenuNew2 == "leveltwo" ? "" : "leveltwo"
                              )
                            }
                          >
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </Link>
                          <ul
                            style={{
                              display:
                                isSideMenuNew2 == "leveltwo" ? "block" : "none",
                            }}
                          >
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </OverlayScrollbarsComponent>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default SidebarNav;
