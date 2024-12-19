import React from "react";

function WhoWeAre() {
  return (
    <section className="who-we-are-section overflow-hidden">
      <figure className="who-we-right-fig">
        <img src="./assets/images/who-we-right.png" alt className="star" />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-1 order-2">
            <div
              className="about-us-content aos-init aos-animate"
              data-aos="fade-up"
            >
              <h6 className="autorix-text" data-aos="fade-up">
                Who we are
              </h6>
              <h2 data-aos="fade-up-right">
                We Spend 30,000 Hours Per Year to Virus Threats
              </h2>
              <p className="aboutus-p">
                Fugiat nulla pariatur excepteur sint occaecat cupidatat non
                proident, sunt in culpa rui officia deserunt mollit anim id est
                laborum incidunt ut labore et dolore magnam.
              </p>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="counter-box">
                    <h3 className="counetr-heading">
                      <span className="counter">2</span>
                      <span>K</span>
                      <span className="plus-counter">+</span>
                    </h3>
                    <p className="counter-text">Engagements</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="counter-box counter-b2">
                    <h3 className="counetr-heading">
                      <span className="counter">17</span>
                      <span>M</span>
                      <span className="plus-counter">+</span>
                    </h3>
                    <p className="counter-text">Monitored Globally</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="counter-box counter-b3">
                    <h3 className="counetr-heading">
                      <span className="counter">18</span>
                      <span>K</span>
                      <span className="plus-counter">+</span>
                    </h3>
                    <p className="counter-text">Network Sensors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2 order-1">
            <div className="who-we-img-content" data-aos="fade-up-right">
              <figure className="mb-0 who-we-figure">
                <img src="./assets/images/who-we-are-img.png" alt />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
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
                <h6 className="autorix-text" data-aos="fade-up">
                  What we do
                </h6>
                <h2
                  data-aos="fade-up-right"
                  className="aos-init aos-animate section2-h2"
                >
                  The Perfect Solution For all Protection
                </h2>
                <p className="aboutus-p">
                  Qugiat nulla pariatur excepteur sint occaecat cupidatat no
                  proident, sunt in culpa rui officia deserunt.
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
                          <h6 className="section2-heading">Cyber Solutions</h6>
                          <p className="section2-text">
                            Ruis autem vel eum rui inea elit niau.
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
                          <h6 className="section2-heading">Network Security</h6>
                          <p className="section2-text">
                            Guis autem vel eum rui inea elit niau.
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
                        <img src="./assets/images/section2-list-img.png" alt />
                      </figure>
                      <div className="section2-box">
                        <h6 className="section2-heading">Web Security</h6>
                        <p className="section2-text">
                          Muis autem vel eum rui inea elit niau.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="section-2-content row2-content">
                      <figure className="section2-figure">
                        <img src="./assets/images/section2-list-img.png" alt />
                      </figure>
                      <div className="section2-box">
                        <h6 className="section2-heading">Locker Security</h6>
                        <p className="section2-text">
                          Euis autem vel eum rui inea elit niau.
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
  );
}

export default WhoWeAre;
