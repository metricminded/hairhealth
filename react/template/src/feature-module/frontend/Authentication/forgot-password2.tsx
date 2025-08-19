import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";

const ForgotPassword2 = () => {
  return (
    <>
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Login Phone */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="account-content">
                <div className="account-info">
                  <div className="login-title">
                    <h3>Forgot Password</h3>
                    <p>
                      Enter your email and we will send you a link to reset your
                      password.
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
                        Remember Password?{" "}
                        <Link to={all_routes.loginEmail}>Sign In</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Login Phone */}
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default ForgotPassword2;
