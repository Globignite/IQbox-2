function CarouselSection() {
  return (
    <section className="carousel-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div id="slider" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#slider"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#slider" data-slide-to={1} />
                <li data-target="#slider" data-slide-to={2} />
              </ol>
              <ol className="carousel-indicators carousel-indicators2">
                <li
                  data-target="#slider"
                  data-slide-to={0}
                  className="active margin-right-li-img"
                >
                  <img
                    src="./assets/images/carousel-img1.png"
                    alt
                    className="invert_effect"
                  />
                </li>
                <li
                  data-target="#slider"
                  data-slide-to={1}
                  className="margin-right-li"
                >
                  <img
                    src="./assets/images/carousel-img2.png"
                    alt
                    className="invert_effect"
                  />
                </li>
                <li
                  data-target="#slider"
                  data-slide-to={2}
                  className="margin-right-li"
                >
                  <img
                    src="./assets/images/carousel-img3.png"
                    alt
                    className="invert_effect"
                  />
                </li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-content">
                    <h5>Best Trusted Cyber Security</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
                    <h4>
                      “IQbox has been an invaluable partner in safeguarding our
                      data. Their tailored cybersecurity solutions provided us
                      with peace of mind, knowing our network is continuously
                      monitored and protected from emerging threats.”
                    </h4>
                    <div className="carousel-text">
                      <h6>Jennifer Miller</h6>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-content">
                    <h5>Best Trusted Cyber Security</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
                    <h4>
                      “With IQbox, we now have a robust cybersecurity
                      infrastructure that gives us confidence. Their expert team
                      helped us stay one step ahead of potential threats,
                      ensuring our business runs securely without
                      interruptions.”
                    </h4>
                    <div className="carousel-text">
                      <h6>David Chen</h6>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-content">
                    <h5>Best Trusted Cyber Security</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
                    <h4>
                      “IQbox’s proactive approach to cybersecurity is unmatched.
                      Their solutions have helped us prevent cyber threats
                      before they even reach us, making them a key part of our
                      operational success.”
                    </h4>
                    <div className="carousel-text">
                      <h6>Rachel Patel</h6>
                      <p>Happy Client</p>
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

export default CarouselSection;
