import React from 'react'
import { doctordashboardprofile06 } from '../../imagepath'
import { Link } from 'react-router-dom'

const PatientSidebar: React.FC = () => {
    return (
        <div>
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
                                Female <i className="fa-solid fa-circle" /> 32 years 03
                                Months
                            </span>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                            <li className="active">
                                <Link to="/patient/dashboard">
                                    <i className="fa-solid fa-shapes" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/patient-appointments">
                                    <i className="fa-solid fa-calendar-days" />
                                    <span>My Appointments</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/favourites">
                                    <i className="fa-solid fa-user-doctor" />
                                    <span>Favourites</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/dependent">
                                    <i className="fa-solid fa-user-plus" />
                                    <span>Dependants</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/medicalrecords">
                                    <i className="fa-solid fa-money-bill-1" />
                                    <span>Add Medical Records</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/accounts">
                                    <i className="fa-solid fa-file-contract" />
                                    <span>Accounts</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/patient-invoice">
                                    <i className="fa-solid fa-file-lines" />
                                    <span>Invoices</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/patient-chat">
                                    <i className="fa-solid fa-comments" />
                                    <span>Message</span>
                                    <small className="unread-msg">7</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/profile">
                                    <i className="fa-solid fa-user-pen" />
                                    <span>Profile Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/medicaldetails">
                                    <i className="fa-solid fa-shield-halved" />
                                    <span>Medical Details</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/patient/change-password">
                                    <i className="fa-solid fa-key" />
                                    <span>Change Password</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <i className="fa-solid fa-calendar-check" />
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PatientSidebar
