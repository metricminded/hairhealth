import { Link } from "react-router";
import ImageWithBasePath from "../../../components/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";

const Register = () => {
  return (
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
                        Patient Register{" "}
                        <Link to="doctor/doctor-register">Are you a Doctor?</Link>
                      </h3>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          className="form-control form-control-lg group_formcontrol form-control-phone"
                          id="phone"
                          name="phone"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="form-group-flex">
                          <label className="form-label">Create Password</label>
                        </div>
                        <div className="pass-group">
                          <input
                            type="password"
                            className="form-control pass-input"
                          />
                          <span className="feather-eye-off toggle-password" />
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
                          Already have account? <Link to={all_routes.login}>Sign In</Link>
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
  );
};

export default Register;
