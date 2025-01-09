function WhatWeDo() {
  return (
    <>
      <section className="who-we-are-section overflow-hidden our-servicess">
        <div className="section-2">
          <figure className="who-we-right-fig">
            <img
              src="./assets/images/section2-before-img.png"
              alt
              className="star"
            />
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="section2-img-content" data-aos="fade-up-right">
                  <figure className="mb-0 who-we-figure section2-fig">
                    <img src="./assets/images/section2-left-img.png" alt />
                  </figure>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <div
                  className="about-us-content aos-init aos-animate mr-0"
                  data-aos="fade-up"
                >
                  <h6 className="autorix-text">What we do</h6>
                  <h2
                    data-aos="fade-zoom-in"
                    className="aos-init aos-animate section2-h2"
                  >
                    The Perfect Solution For all Protection
                  </h2>
                  <p className="aboutus-p">
                    We offer tailored security solutions, including cyber
                    intelligence, malware removal, and threat protection, to
                    safeguard your business.
                  </p>
                  <div className="section2-row1">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="section-2-content">
                          <figure className="section2-figure">
                            <img
                              src="./assets/images/section2-list-img.png"
                              alt
                            />
                          </figure>
                          <div className="section2-box">
                            <h6 className="section2-heading">
                              Wireless & Detecting Security Threats
                            </h6>
                            <p className="section2-text">
                              Detect security threats with advanced wireless
                              monitoring.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="section-2-content row2-content">
                          <figure className="section2-figure">
                            <img
                              src="./assets/images/section2-list-img.png"
                              alt
                            />
                          </figure>
                          <div className="section2-box">
                            <h6 className="section2-heading">
                              Investigation of Cyber Crimes
                            </h6>
                            <p className="section2-text">
                              Investigate and resolve cyber crimes with expert
                              digital forensics.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="section-2-content">
                        <figure className="section2-figure">
                          <img
                            src="./assets/images/section2-list-img.png"
                            alt
                          />
                        </figure>
                        <div className="section2-box">
                          <h6 className="section2-heading">
                            Malware and Virus Removal
                          </h6>
                          <p className="section2-text">
                            Quickly remove malware and viruses to restore your
                            system's security.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="section-2-content row2-content">
                        <figure className="section2-figure">
                          <img
                            src="./assets/images/section2-list-img.png"
                            alt
                          />
                        </figure>
                        <div className="section2-box">
                          <h6 className="section2-heading">
                            Verification of Backup Software and Recovery
                          </h6>
                          <p className="section2-text">
                            Ensure data safety with reliable backup software
                            verification and recovery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
