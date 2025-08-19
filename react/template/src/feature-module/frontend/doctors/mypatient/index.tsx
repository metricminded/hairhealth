import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile04, doctordashboardprofile05, doctordashboardprofile06, doctordashboardprofile07, doctordashboardprofile08, doctordashboardprofile3 } from "../../imagepath";
import ImageWithBasePath from "../../../../components/imageWithBasePath";
import PredefinedDatePicker from "../../common/common-dateRangePicker/PredefinedDatePicker";
import { Filter } from "../../common/filter";

const MyPatient: React.FC = (props) => {
  return (
    <div>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="isax isax-home-15" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor
                    </li>
                    <li className="breadcrumb-item active">My Patients</li>
                  </ol>
                  <h2 className="breadcrumb-title">My Patients</h2>
                </nav>
              </div>
            </div>
          </div>
          <div className="breadcrumb-bg">
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-01.png"
              alt="img"
              className="breadcrumb-bg-01"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-02.png"
              alt="img"
              className="breadcrumb-bg-02"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-03"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-04"
            />
          </div>
        </div>
        {/* /Breadcrumb */}
      </>

      {/* Page Content */}
      <div className="content doctor-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorSidebar />
              {/* /Profile Sidebar */}
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>My Patients</h3>
                <ul className="header-list-btns">
                  <li>
                    <div className="input-block dash-search-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="search-icon">
                        <i className="fa-solid fa-magnifying-glass" />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="appointment-tab-head">
                <div className="appointment-tabs">
                  <ul
                    className="nav nav-pills inner-tab "
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-upcoming-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-upcoming"
                        type="button"
                        role="tab"
                        aria-controls="pills-upcoming"
                        aria-selected="false"
                      >
                        Active<span>200</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-cancel-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-cancel"
                        type="button"
                        role="tab"
                        aria-controls="pills-cancel"
                        aria-selected="true"
                      >
                        InActive<span>22</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="filter-head">
                  <div className="position-relative daterange-wraper me-2">
                      <PredefinedDatePicker/>
                    <i className="fa-solid fa-calendar-days" />
                  </div>
                  <Filter />
                </div>
              </div>
              <div className="tab-content appointment-tab-content grid-patient">
                <div
                  className="tab-pane fade show active"
                  id="pills-upcoming"
                  role="tabpanel"
                  aria-labelledby="pills-upcoming-tab"
                >
                  <div className="row">
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile01}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0001</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Adrian</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 42</li>
                                    <li>Male</li>
                                    <li>AB+</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              11 Nov 2025 10.45 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Alabama, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking <span>27 Feb 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile02}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0002</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Kelly Stevens</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 37</li>
                                    <li>Female</li>
                                    <li>O+</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              05 Nov 2025 11.50 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              San Diego, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>20 Mar 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile3}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0003</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Samuel James</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 43</li>
                                    <li>Male</li>
                                    <li>B+</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              27 Oct 2025 09.30 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Chicago, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>12 Mar 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile04}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0004</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Catherine Gracey</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 36</li>
                                    <li>Female</li>
                                    <li>AB-</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              18 Oct 2025 12.20 PM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Los Angeles, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>27 Feb 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile05}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0005</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Robert Miller</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 38</li>
                                    <li>Male</li>
                                    <li>A+</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              10 Oct 2025 11.30 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Dallas, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>18 Feb 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile06}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0006</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Anderea Kearns</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 40</li>
                                    <li>Female</li>
                                    <li>B-</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              26 Sep 2025 10.20 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              San Francisco, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>11 Feb 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile07}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0007</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Peter Anderson</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 30</li>
                                    <li>Male</li>
                                    <li>A-</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              14 Sep 2025 08.10 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Austin, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>25 Jan 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile08}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0008</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Emily Musick</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 32</li>
                                    <li>Female</li>
                                    <li>O-</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              03 Sep 2025 06.00 PM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Nashville, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>13 Jan 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile01}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0009</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Darrell Tan</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 31</li>
                                    <li>Male</li>
                                    <li>AB+</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              25 Aug 2025 10.45 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              San Antonio, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>03 Jan 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    <div className="col-md-12">
                      <div className="loader-item text-center">
                        <Link to="#" className="btn btn-load">
                          Load More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-cancel"
                  role="tabpanel"
                  aria-labelledby="pills-cancel-tab"
                >
                  <div className="row">
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile06}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0006</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Anderea Kearns</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 40</li>
                                    <li>Female</li>
                                    <li>B-</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              26 Sep 2025 10.20 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              San Francisco, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>11 Feb 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile01}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0009</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Darrell Tan</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 31</li>
                                    <li>Male</li>
                                    <li>AB+</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              25 Aug 2025 10.45 AM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              San Antonio, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>03 Jan 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/doctor/patient-profile">
                                  <img
                                    src={doctordashboardprofile04}
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0004</p>
                                  <h6>
                                    <Link to="/doctor/patient-profile">Catherine Gracey</Link>
                                  </h6>
                                  <ul>
                                    <li>Age : 36</li>
                                    <li>Female</li>
                                    <li>AB-</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="fa-solid fa-clock" />
                              18 Oct 2025 12.20 PM
                            </p>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot" />
                              Los Angeles, USA
                            </p>
                          </li>
                          <li className="appointment-action">
                            <div className="patient-book">
                              <p>
                                <i className="isax isax-calendar-1" />
                                Last Booking<span>27 Feb 2025</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    <div className="col-md-12">
                      <div className="loader-item text-center">
                        <Link to="#" className="btn btn-load">
                          Load More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <DoctorFooter />
    </div>
  );
};

export default MyPatient;
