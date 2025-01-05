function OurServices() {
  return (
    <section className="our-services-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 className="heading" data-aos="fade-up">
              Our Services
            </h6>
            <h2 className="text-center" data-aos="fade-up-right">
              Cyber Security Solutions
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="services-content">
                <div className="icons-rounded-box">
                  <figure className="mb-0">
                    <img src="./assets/images/services-img1.png" alt />
                  </figure>
                </div>
                <div className="services-box">
                  <h5>Cybersecurity Solutions</h5>
                  <p className="security-services-p">
                    Cybersecurity Solutions to safeguard your critical systems.
                  </p>
                  <a href="services.html" className="text-decoration-none">
                    Discover Our Expertise
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="services-content">
                <div className="icons-rounded-box">
                  <figure className="mb-0 icon-color">
                    <img src="./assets/images/services-img2.png" alt />
                  </figure>
                </div>
                <div className="services-box">
                  <h5>Salesforce Consulting</h5>
                  <p className="security-services-p">
                    Salesforce Consulting for smarter, customer-centric growth.
                  </p>
                  <a href="about.html" className="text-decoration-none">
                    Discover Our Expertise
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="services-content">
                <div className="icons-rounded-box">
                  <figure className="mb-0">
                    <img src="./assets/images/services-img3.png" alt />
                  </figure>
                </div>
                <div className="services-box">
                  <h5>IT Services & Consulting</h5>
                  <p className="security-services-p">
                    IT Services & Consulting to streamline and optimize your IT
                    infrastructure.
                  </p>
                  <a href="about.html" className="text-decoration-none">
                    Discover Our Expertise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
