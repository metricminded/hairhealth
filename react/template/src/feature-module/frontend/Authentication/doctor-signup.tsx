import { useState } from "react";
import ImageWithBasePath from "../../../components/imageWithBasePath";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { Link } from "react-router";

const DoctorSignup = () => {
    const [tab, setTab] = useState(true);

    const [phone, setPhone] = useState<string | undefined>()

    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

  return (
    <>
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Doctor Signup */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="account-content">
                <div className="login-shapes">
                  <div className="shape-img-left">
                    <ImageWithBasePath src="assets/img/shape-01.png" alt="shape-image" />
                  </div>
                  <div className="shape-img-right">
                    <ImageWithBasePath src="assets/img/shape-02.png" alt="shape-image" />
                  </div>
                </div>
                <div className="widget-set">
                  <div className="account-info">
                    <div className="widget-content multistep-form">
                      <fieldset id="first" className={`${tab === false ? "field-card d-none" : "d-block"}`}>
                        <div className="login-title">
                          <h3>Doctor Signup</h3>
                          <p className="mb-0">
                            Welcome back! Please enter your details.
                          </p>
                        </div>
                        <div className="widget-setcount">
                          <ul id="progressbar">
                            <li className="progress-active">
                              <div className="step-box">
                                <div className="step-icon">
                                  <span>
                                    <i className="isax isax-user" />
                                  </span>
                                </div>
                                <div className="step-content">
                                  <p>Step 1</p>
                                  <h4>Create Account</h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="step-box">
                                <div className="step-icon">
                                  <span>
                                    <i className="isax isax-lock" />
                                  </span>
                                </div>
                                <div className="step-content">
                                  <p>Step 2</p>
                                  <h4>Verify Account</h4>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <form action="#">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <PhoneInput
                                defaultCountry="US"
                                value={phone}
                                onChange={setPhone}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="pass-group">
                              <input
                                  type={isPasswordVisible ? "text" : "password"}
                                  className="form-control pass-input-sub"
                              />
                              <span
                                  className={`feather toggle-password-sub ${isPasswordVisible ? "feather-eye" : "feather-eye-off"
                                  }`}
                                  onClick={togglePasswordVisibility}
                              />
                            </div>
                          </div>
                        </form>
                        <div className="widget-btn">
                          <Link to="#" onClick={() => setTab(!tab)} className="btn btn-primary-gradient btn-xl w-100 next_btn">
                            Next
                          </Link>
                        </div>
                      </fieldset>
                      <fieldset className={`${tab === false ? "field-card d-block" : "d-none"}`}>
                        <div className="login-title">
                          <h3>Security Verification</h3>
                          <p className="mb-0">
                            To Secure your Account create complete the following
                            verify request.
                          </p>
                        </div>
                        <div className="widget-setcount">
                          <ul id="progressbar1">
                            <li className="progress-activated">
                              <div className="step-box">
                                <div className="step-icon">
                                  <span>
                                    <i className="isax isax-user" />
                                  </span>
                                </div>
                                <div className="step-content">
                                  <h4>Create Account</h4>
                                  <p>Step 1</p>
                                </div>
                              </div>
                            </li>
                            <li className="progress-active">
                              <div className="step-box">
                                <div className="step-icon">
                                  <span>
                                    <i className="isax isax-lock" />
                                  </span>
                                </div>
                                <div className="step-content">
                                  <h4>Verify Account</h4>
                                  <p>Step 2</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <form
                          className="signup-verfication-form"
                        >
                          <div className="mb-3">
                            <div className="form-group-flex">
                              <label className="form-label">Phone</label>
                              <Link
                                to="#"
                                className="forgot-link"
                              >
                                Get Code
                              </Link>
                            </div>
                            <div className="pass-group">
                                <PhoneInput
                                    defaultCountry="US"
                                    value={phone}
                                    onChange={setPhone}
                                />
                            </div>
                            <p className="signup-code">
                              Enter the 6 digit code sent to 98****4578
                            </p>
                          </div>
                          <div className="mb-3">
                            <div className="form-group-flex">
                              <label className="form-label">Email</label>
                              <Link
                                to="#"
                                className="forgot-link"
                              >
                                Get Code
                              </Link>
                            </div>
                            <div className="pass-group">
                              <input
                                type="text"
                                className="form-control form-control-phone"
                              />
                            </div>
                            <p className="signup-code">
                              Enter the 6 digit code sent to ex****@gmail.com
                            </p>
                          </div>
                          <div className="mb-0">
                            <button
                              className="btn btn-primary-gradient w-100"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Doctor Signup */}
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default DoctorSignup;
