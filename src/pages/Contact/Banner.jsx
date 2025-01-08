function Banner() {
  return (
    <div className="home-banner-section overflow-hidden position-relative sub-banner-section">
      <div className="banner-container-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-banner-outer">
                <h1>Contact Us</h1>
                <p>
                  Get in touch with IQBOX for tailored security and technology
                  solutions. We’re here to help you securely advance!
                </p>
                <div className="banner-btn discover-btn-banner">
                  <div className="btn-inner">
                    Home{" "}
                    <span className="arrow-angles">
                      <i className="fa fa-angles-right"></i>
                    </span>
                    <span className="about-margin">Contact Us</span>
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
