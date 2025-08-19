import React from "react";
import { Link } from "react-router-dom";
import { doctordashboardprofile06 } from "../../../imagepath";

export const DashboardSidebar: React.FC = () => {
  const pathnames = window.location.pathname;
  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar patient-sidebar profile-sidebar-new">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="/patient/profile" className="booking-doc-img">
              <img
                src={doctordashboardprofile06}
                alt="User Image"
              />
            </Link>
            <div className="profile-det-info">
              <h3>
                <Link to="/patient/profile">Hendrita</Link>
              </h3>
              <div className="patient-details">
                <h5 className="mb-0">Patient ID : PT254654</h5>
              </div>
              <span>
                Female <i className="fa-solid fa-circle" /> 32 years 03 Months
              </span>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li className={pathnames.includes('/patient/dashboard') ? 'active' : ''}>
                <Link to="/patient/dashboard">
                  <i className="isax isax-category-2"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/patient-appointments') || pathnames.includes('/patient/appoinment-grid') || pathnames.includes('/patient/patient-cancelled-appointment') || pathnames.includes('/patient/patient-cancelled-appointment') || pathnames.includes('/patient/patient-completed-appointment') || pathnames.includes('/patient/upcoming-appointment') ? 'active' : ''}>

                <Link to="/patient/patient-appointments">
                  <i className="isax isax-calendar-1"></i>
                  <span>My Appointments</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/favourites') ? 'active' : ''}>

                <Link to="/patient/favourites">
                  <i className="isax isax-star-1"></i>
                  <span>Favourites</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/dependent') ? 'active' : ''}>

                <Link to="/patient/dependent">
                  <i className="isax isax-user-octagon"></i>
                  <span>Dependants</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/medicalrecords') ? 'active' : ''}>

                <Link to="/patient/medicalrecords">
                  <i className="isax isax-note-21"></i>
                  <span>Medical Records</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/accounts') ? 'active' : ''}>

                <Link to="/patient/accounts">
                  <i className="isax isax-wallet-2"></i>
                  <span>Wallet</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/patient-invoice') ? 'active' : ''}>

                <Link to="/patient/patient-invoice">
                  <i className="isax isax-document-text"></i>
                  <span>Invoices</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/patient-chat') ? 'active' : ''}>

                <Link to="/patient/patient-chat">
                  <i className="isax isax-messages-1"></i>
                  <span>Message</span>
                  <small className="unread-msg">7</small>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/medicaldetail') ? 'active' : ''}>

                <Link to="/patient/medicaldetails">
                  <i className="isax isax-note-1"></i>
                  <span>Vitals</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/profile') ? 'active' : pathnames.includes('/patient/change-password') ? 'active' : pathnames.includes('/patient/two-factor-authentication') ? 'active' : pathnames.includes('/patient/delete-account') ? 'active' : ''}>

                <Link to="/patient/profile">
                  <i className="isax isax-setting-2"></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="isax isax-logout"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>

  );
};
export default DashboardSidebar;
