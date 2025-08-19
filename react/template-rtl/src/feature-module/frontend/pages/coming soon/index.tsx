/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../components/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";

const Comingsoon = () => {


  const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [seconds]);

    const FormatTime = (time: any) => {
      // Add leading zero for single-digit numbers
      return time < 10 ? `0${time}` : time.toString();
  };


  return (
    <>
      {/* Coming Soon */}
      <div className="container-fluid p-0">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="error-info">
                <div className="error-404-img">
                  <ImageWithBasePath
                    src="assets/img/coming-soon.png"
                    className="img-fluid"
                    alt="error-500-image"
                  />
                  <div className="error-content">
                    <h5 className="mb-2">We’re getting ready to launch</h5>
                    <p>
                      We'll be here soon with our new awesome site, subscribe to be
                      notified.
                    </p>
                  </div>
                  <div className="coming-soon-info">
                    <div className="coming-soon-count">
                      <h4 id="day-box">5</h4>
                      <p>Days</p>
                    </div>
                    <div className="coming-soon-count">
                      <h4 id="hr-box">8</h4>
                      <p>Hours</p>
                    </div>
                    <div className="coming-soon-count">
                      <h4 id="min-box">48</h4>
                      <p>Minutes</p>
                    </div>
                    <div className="coming-soon-count">
                      <h4 id="sec-box">{FormatTime(seconds)}</h4>
                      <p>Seconds</p>
                    </div>
                  </div>
                  <Link to={all_routes.generalHomeOne} className="btn btn-primary-gradient btn-sm">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Coming Soon */}
    </>

  );
};

export default Comingsoon;
