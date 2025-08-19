import { useEffect, useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import ImageWithBasePath from "../../../../components/imageWithBasePath";
import CommonPhoneInput from "../../common/common-phoneInput/commonPhoneInput";
import { Link } from "react-router-dom";

const DoctorRegister = (props: any) => {
  // const history = useHistory();
  const [phone, setPhone] = useState<string | undefined>();
  // const [phone2, setPhone2] = useState<string | undefined>();
   const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const TogglePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = "account-page";

    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <>
      <Header {...props} />
      <>
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <ImageWithBasePath
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Doctor Register{" "}
                          <Link to="/patient/patientregisterstep-1">Not a Doctor?</Link>
                        </h3>
                      </div>
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <CommonPhoneInput
                            value={phone}
                            onChange={setPhone}
                            placeholder="(201) 555-0123"
                          />
                        </div>
                        <div className="mb-3">
                          <div className="form-group-flex">
                            <label className="form-label">Create Password</label>
                          </div>
                          <div className="pass-group">
                              <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="form-control pass-input-sub"
                              />
                              <span
                                className={`feather toggle-password-sub ${isPasswordVisible ? "feather-eye" : "feather-eye-off"
                                  }`}
                                onClick={TogglePasswordVisibility}
                              />
                            </div>
                        </div>
                        <div className="mb-3">
                          <button
                            className="btn btn-primary-gradient w-100"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or">or</span>
                        </div>
                        <div className="social-login-btn">
                          <Link to="javascript:void(0);" className="btn w-100">
                            <ImageWithBasePath
                              src="assets/img/icons/google-icon.svg"
                              alt="google-icon"
                            />
                            Sign in With Google
                          </Link>
                          <Link to="javascript:void(0);" className="btn w-100">
                            <ImageWithBasePath
                              src="assets/img/icons/facebook-icon.svg"
                              alt="fb-icon"
                            />
                            Sign in With Facebook
                          </Link>
                        </div>
                        <div className="account-signup">
                          <p>
                            Already have account? <Link to="/login">Sign In</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </>
  );
};

export default DoctorRegister;
