import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import Footer from "../../footer";
import { onelogo, oneslide } from "./img";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar";

const DependantDetails: React.FC = () => {
  const [child, setChild] = useState({
    name: false,
    age: false,
  });
  const [spouse, setSpouse] = useState({
    name: false,
    age: false,
  });
  const [father, setFather] = useState({
    name: false,
    age: false,
  });
  const [mother, setMother] = useState({
    name: false,
    age: false,
  });

  const handleChild = (value: string) => {
    if (value === "name") setChild({ ...child, name: !child.name });
    else setChild({ ...child, age: !child.age });
  };
  const handleSpouse = (value: string) => {
    if (value === "name") setSpouse({ ...spouse, name: !spouse.name });
    else setSpouse({ ...spouse, age: !spouse.age });
  };
  const handleFather = (value: string) => {
    if (value === "name") setFather({ ...father, name: !father.name });
    else setFather({ ...father, age: !father.age });
  };
  const handleMother = (value: string) => {
    if (value === "name") setMother({ ...mother, name: !mother.name });
    else setMother({ ...mother, age: !mother.age });
  };

  return (
    <>
      <div className="onboard-wrapper">
        <div className="left-panel">
          <div className="onboarding-logo text-center">
            <Link to="/home-2">
              <img src={onelogo} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="onboard-img">
            <img src={oneslide} className="img-fluid" alt="" />
          </div>
          <OnboardingSidebar></OnboardingSidebar>
        </div>
        <div className="right-panel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="right-panel-title text-center">
                  <Link to="/home-2">
                    {" "}
                    <img src={onelogo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="on-board-wizard">
                  <ul>
                    <li>
                      <Link to="/pages/patient-email">
                        <div className="onboarding-progress active">
                          <span>1</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Registration</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-personalize">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Profile Picture</h6>
                          <p>Upload Profile picture</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-details">
                        <div className="onboarding-progress active">
                          <span>3</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Personal Details</h6>
                          <p>Enter your Personal Details</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-family-details">
                        <div className="onboarding-progress active">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Select Members</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-dependant-details">
                        <div className="onboarding-progress active">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Dependant details</h6>
                          <p>Dependants Profile</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-other-details">
                        <div className="onboarding-progress">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Other Detail</h6>
                          <p>More information</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box content-wrap">
                  <div className="onborad-set">
                    <div className="onboarding-title">
                      <h2>
                        Dependant details<span>*</span>
                      </h2>
                      <h6>Add age & Photo of the each members</h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div
                          className="accordion"
                          id="accordionPanelsStayOpenExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingChild"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseChild"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseChild"
                              >
                                Child
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseChild"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingChild"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleChild("name")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          child.name
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleChild("age")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          child.age
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Age <span>*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <div className="relative-form">
                                        <span>Upload Photo</span>
                                        <label className="relative-file-upload">
                                          File Upload <input type="file" />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingSpouse"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseSpouse"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseSpouse"
                              >
                                Spouse
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseSpouse"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingSpouse"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleSpouse("name")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          spouse.name
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleSpouse("age")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          spouse.age
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Age <span>*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <div className="relative-form">
                                        <span>Upload Photo</span>
                                        <label className="relative-file-upload">
                                          File Upload <input type="file" />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingFather"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFather"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFather"
                              >
                                Father
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseFather"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingFather"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleFather("name")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          father.name
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleFather("age")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          father.age
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Age <span>*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <div className="relative-form">
                                        <span>Upload Photo</span>
                                        <label className="relative-file-upload">
                                          File Upload <input type="file" />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingMother"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseMother"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseMother"
                              >
                                Mother
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseMother"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingMother"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleMother("name")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          mother.name
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group ">
                                      <div
                                        onClick={() => handleMother("age")}
                                        className={` input-placeholder form-focus passcode-wrap mail-box ${
                                          mother.age
                                            ? "input-placeholder form-focus passcode-wrap mail-box focused"
                                            : ""
                                        }`}
                                      >
                                        <label className="focus-label">
                                          Age <span>*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control floating"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <div className="relative-form">
                                        <span>Upload Photo</span>
                                        <label className="relative-file-upload">
                                          File Upload <input type="file" />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="onboarding-btn">
                      <Link to="/pages/patient-other-details">Continue</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DependantDetails;
