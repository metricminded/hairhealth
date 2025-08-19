import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { useLocation } from "react-router-dom";
import { 
  Home, 
  FileText, 
  Layout, 
  Star, 
  Activity, 
  Users, 
  Database, 
  UserPlus, 
  Settings 
} from "react-feather";

const SidebarNav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isSideMenu, setSideMenu] = useState("");

  const toggleSidebar = (value: string): void => {
    setSideMenu(value);
  };
   
  const [isSidebarExpanded, _setSidebarExpanded] = useState(true);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);

  useEffect(() => {
    if (isMouseOverSidebar && document.body.classList.contains("mini-sidebar")) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);

  const handleMouseEnter = (): void => {
    setMouseOverSidebar(true);
  };

  const handleMouseLeave = (): void => {
    setMouseOverSidebar(false);
  };
  return (
    <div
    className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
    id="sidebar"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
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
              <li className={pathname === "/pharmacyadmin" ? "active" : ""}>
                <Link to="/pharmacyadmin">
                  <Home size={16} /> <span>Dashboard</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Products" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Products" ? "" : "Products")
                  }
                >
                  <FileText size={16} /> <span> Products</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                {isSideMenu == "Products" ? (
                  <ul
                    style={{
                      display: isSideMenu == "Products" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("products")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/products"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("add-product")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/add-product"
                      >
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("outstock")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/outstock"
                      >
                        Out-Stock
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("expired")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/expired"
                      >
                        Expired
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li
                className={
                  pathname && pathname.includes("categories") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/categories">
                  <Layout size={16} /> <span>Categories</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Purchase" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Purchase" ? "" : "Purchase")
                  }
                >
                  <Star size={16} /> <span>Purchase</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul
                  style={{
                    display: isSideMenu == "Purchase" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("purchase")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/purchase"
                    >
                      Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("add-purchase")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/add-purchase"
                    >
                      Add Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("order") ? "active" : ""
                      }
                      to="/pharmacyadmin/order"
                    >
                      Order
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname && pathname.includes("sales") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/sales">
                  <Activity size={16} /> <span>Sales</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Supplier" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Supplier" ? "" : "Supplier")
                  }
                >
                  <Users size={16} /> <span>Supplier</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul
                  style={{
                    display: isSideMenu == "Supplier" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("supplier")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/supplier"
                    >
                      Supplier
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("add-supplier")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/add-supplier"
                    >
                      Add Supplier
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname && pathname.includes("transactions-list")
                    ? "active"
                    : ""
                }
              >
                <Link to="/pharmacyadmin/transactions-list">
                  <Database size={16} /> <span>Transaction</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Reports" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Reports" ? "" : "Reports")
                  }
                >
                  <FileText size={16} /> <span>Reports</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul
                  style={{
                    display: isSideMenu == "Reports" ? "block" : "none",
                  }}
                >
                  {/* <li><Link className={pathname && pathname.includes('invoice') ?"active" :""} to="/pharmacyadmin/reportinvoice">Invoice</Link></li> */}
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("invoice-report")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/invoice-report"
                    >
                      Invoice Reports
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li
                className={
                  pathname && pathname.includes("profile") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/profile">
                  <UserPlus size={16} /> <span>Profile</span>
                </Link>
              </li>
              <li
                className={
                  pathname && pathname.includes("settings") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/settings">
                  <Settings size={16} /> <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};
export default SidebarNav;
