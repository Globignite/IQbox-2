

function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="footer-content1">
              <a href="index.html" className="text-decoration-none">
                <figure>
                  <img
                    src="./assets/images/footer-logo.png"
                    alt
                    className="img-fluid"
                  />
                </figure>
              </a>
              <p className="footer-section-text">
                Deleniti aeue corrupti quos dolores et quas molestias excepturi
                sint occaecati rupiditate non provident, similique sunt...
              </p>
              <ul className="list-unstyled">
                <li className="list-item">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f marginLeft" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter marginLeft" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram marginLeft" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 d-lg-block d-none">
            <h5 className="footer-link footer-next-list footer-next-list-about">
              About Us
            </h5>
            <ul className="useful-footer">
              <li>
                <a
                  href="services.html"
                  className="text-decoration-none footer-link-p"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="pricing.html"
                  className="text-decoration-none footer-link-p"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="text-decoration-none footer-link-p"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="our-team.html"
                  className="text-decoration-none footer-link-p"
                >
                  Our Teams
                </a>
              </li>
              <li>
                <a
                  href="./contact.html"
                  className="text-decoration-none footer-link-p"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 d-md-block d-none">
            <h5 className="footer-link text-white footer-next-list footer-next-list-contact">
              Contact Info
            </h5>
            <div className="footer-list footer-link contact-list">
              <div className="icon-list-box1">
                <ul className="list-unstyled contact-us-ul">
                  <li className="list-item">
                    <a
                      href="tel:+4733378901"
                      className="text-decoration-none footer-link-auto"
                    >
                      +61 3 8376 6284
                    </a>
                    <i className="fa fa-phone fa-icon footer-location3" />
                  </li>
                  <li className="list-item">
                    <a
                      href="mailto:webmaster@example.com"
                      className="text-decoration-none footer-link-auto"
                    >
                      Info@whizcyber.om
                    </a>
                    <i className="fa fa-envelope fa-icon footer-location2" />
                  </li>
                  <li className="list-item">
                    <a className="text-decoration-none footer-link-auto">
                      21 King Street Melbourne,3000, Australia
                    </a>
                    <i className="fa-solid fa-location-dot footer-location" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="footer-list signupbox">
              <h4 className="footer-link text-white footer-next-list footer-next-list-signup">
                Sign up for Newsletter
              </h4>
              <div className="icon-list-box1">
                <div className="col-inner">
                  <input
                    type="tel"
                    name="email"
                    className="form-control input-fill"
                    placeholder="Email Address:"
                  />
                </div>
                <div className="form-btn">
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar text-center">
        <div className="row">
          <div className="footer-bar-content w-100">
            <p className="text-size-16 mb-0">
              Whizcyber copyright © 2022. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
