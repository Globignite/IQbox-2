function Banner() {
  return (
    <div className="home-banner-section overflow-hidden position-relative sub-banner-section">
      <div className="banner-container-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-banner-outer">
                <h1>About Us</h1>
                <p>
                  IQBOX delivers expert cybersecurity, AI, and custom tech
                  solutions to help businesses grow securely in a digital world.
                </p>
                <div className="banner-btn discover-btn-banner">
                  <div className="btn-inner">
                    Home{" "}
                    <span className="arrow-angles">
                      <i className="fa fa-angles-right"></i>
                    </span>
                    <span className="about-margin">About Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
