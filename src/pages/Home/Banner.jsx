function Banner() {
  return (
    <div className="home-banner-section overflow-hidden position-relative">
      <div className="banner-container-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 mb-md-0 mb-4 text-md-left text-center order-lg-1 order-2">
              <div className="social-icons position-absolute">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none">
                      <i className="fa-brands fa-facebook-f social-networks" />
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none">
                      <i className="fa-brands fa-twitter social-networks" />
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none">
                      <i className="fa-brands fa-instagram social-networks" />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="home-banner-text"
                data-aos="fade-up"
                id="myContentDIV"
              >
                <h1>
                  <span className="h1-text">Secure. Scale. Transform.</span>{" "}
                </h1>
                <p className="banner-paragraph">
                  IQBOX combines Cybersecurity, Salesforce Consulting, and IT
                  Transformation to help businesses protect their data, engage
                  customers, and drive operational excellence.
                </p>
                <div className="banner-btn discover-btn-banner">
                  <a href="about.html" className="text-decoration-none">
                    Get Started
                  </a>
                  <a
                    href="contact.html"
                    className="text-decoration-none play-button"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 order-lg-2 order-1">
              <div className="banner-img-content position-relative">
                <figure className="banner-img mb-0">
                  <img
                    className="img-fluid banner-img-width"
                    src="assets/images/whiz-cyber-banner.png"
                    alt
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
