function Banner() {
  return (
    <div className="home-banner-section overflow-hidden position-relative sub-banner-section">
      <div className="banner-container-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-banner-outer">
                <h1>Blog</h1>
                <p>Connect with IQBOX for tailored security and tech solutions.<br />
                  We’re here to protect and advance your future!</p>
                <div className="banner-btn discover-btn-banner">
                  <div className="btn-inner">
                    Home{" "}
                    <span className="arrow-angles">
                      <i className="fa fa-angles-right" />
                    </span>
                    <span className="about-margin">Blog</span>
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
