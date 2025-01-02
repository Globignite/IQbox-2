

function AboutUsSection() {
  return (
    <section className="about-us-section overflow-hidden position-relative">
      <figure className="about-left-back-img">
        <img
          src="./assets/images/about-left-background.png"
          alt
          className="star"
        />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 order-lg-1 order-2">
            <div className="about-content-img" data-aos="fade-up-left">
              <figure className="mb-0 about-section-f1">
                <img src="./assets/images/about-section-img1.png" alt />
              </figure>
              <figure className="mb-0 about-section-f2">
                <img src="./assets/images/about-section-img2.png" alt />
              </figure>
              <figure className="mb-0 about-section-f3">
                <img src="./assets/images/about-section-img3.png" alt />
              </figure>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2 order-2">
            <div
              className="about-us-content aos-init aos-animate"
              data-aos="fade-up"
            >
              <h6 className="autorix-text" data-aos="fade-up">
                About us
              </h6>
              <h2 data-aos="fade-up-left">
                24/7 Cyber Security Operation Center
              </h2>
              <p className="aboutus-p" data-aos="fade-up-right">
                Duis aute irure dolor in reprehenderit in voluptate esse cillu
                dolore eu fugiat nulla pariatur excepteur sint occaecat cupia at
                non proident, sunt in culpa rui officia deserunt mollit ani mid
                est laborum incidunt aut labore magnam.
              </p>
              <ul
                className="list-unstyled list-margin-bottom"
                data-aos="fade-up-right"
              >
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    Malware Detection Removal
                  </span>
                </li>
                <li className="d-inline-block cloud-security-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Cloud Security
                  </span>
                </li>
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    Content Delivery Network
                  </span>
                </li>
                <li className="d-inline-block user-li threat-detection-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Cyber Security
                  </span>
                </li>
              </ul>
              <ul
                className="list-unstyled left-section-margin-bottom"
                data-aos="fade-up-left"
              >
                <li className="d-inline-block mb-lg-0 mb-3 mr-lg-1 smart-tools-li">
                  <i className="fa-solid fa-check ml-0 last-li-form-section" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    Security Management
                  </span>
                </li>
                <li className="d-inline-block user-li cyber-security-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Identifying Threats
                  </span>
                </li>
                <li className="d-inline-block mb-lg-0 mb-3 mr-lg-1 smart-tools-li">
                  <i className="fa-solid fa-check ml-0 last-li-form-section" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    SIEM Threat Detection
                  </span>
                </li>
                <li className="d-inline-block user-li server-security-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Server Security
                  </span>
                </li>
              </ul>
              <div className="banner-btn discover-btn-banner">
                <a href="about.html" className="text-decoration-none">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
