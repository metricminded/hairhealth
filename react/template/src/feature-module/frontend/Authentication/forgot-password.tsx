import { all_routes } from "../../../routes/all_routes";
import { Link } from "react-router";
import ImageWithBasePath from "../../../components/imageWithBasePath";

const ForgotPassword = () => {
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
                      <h3>Forgot Password</h3>
                      <p>
                        Enter your email and we will send you a link to reset
                        your password.
                      </p>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" type="email" />
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary-gradient w-100"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="account-signup">
                        <p>
                          Remember Password? <Link to={all_routes.login}>Sign In</Link>
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

export default ForgotPassword;
