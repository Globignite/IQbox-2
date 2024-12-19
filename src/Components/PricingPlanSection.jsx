import React from "react";

function PricingPlanSection() {
  return (
    <section className="pricing-plan-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 data-aos="fade-up">we offer</h6>
            <h2 className="text-center" data-aos="fade-up-right">
              Our Flexible Pricing Plans
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 mb-md-5 mb-sm-5 mb-0">
            <div className="services-content" data-aos="fade-up">
              <h5 className="pricing-plan-h5">Beginner</h5>
              <div className="icons-rounded-box">
                <figure className="mb-0">
                  <img src="./assets/images/pricing-plan-icon1.png" alt />
                </figure>
              </div>
              <h2 className="pricing-plan-color mb-0">
                $120 <span className="pricing-free-text">/ Per Month</span>
              </h2>
              <ul className="list-unstyled list-margin-bottom">
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    10 Days Product Testing
                  </span>
                </li>
                <li className="d-inline-block cloud-security-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Upgrade Anytime Protection
                  </span>
                </li>
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    100 Malware Removal
                  </span>
                </li>
                <li className="d-inline-block user-li threat-detection-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Scan Every 08 Hrs
                  </span>
                </li>
              </ul>
              <div className="order-now-btn">
                <a href="pricing.html" className="text-decoration-none">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="services-content" data-aos="fade-up">
              <h5 className="pricing-plan-h5">Business</h5>
              <div className="icons-rounded-box">
                <figure className="mb-0">
                  <img src="./assets/images/pricing-plan-icon2.png" alt />
                </figure>
              </div>
              <h2 className="pricing-plan-color mb-0">
                $180 <span className="pricing-free-text">/ Per Month</span>
              </h2>
              <ul className="list-unstyled list-margin-bottom">
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    40 Days Product Testing
                  </span>
                </li>
                <li className="d-inline-block cloud-security-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Upgrade Anytime Protection
                  </span>
                </li>
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    100 Malware Removal
                  </span>
                </li>
                <li className="d-inline-block user-li threat-detection-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    24/7 Live Assistance
                  </span>
                </li>
              </ul>
              <div className="order-now-btn">
                <a href="pricing.html" className="text-decoration-none">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="services-content pro-card" data-aos="fade-up">
              <h5 className="pricing-plan-h5">Professional</h5>
              <div className="icons-rounded-box">
                <figure className="mb-0">
                  <img src="./assets/images/pricing-plan-icon3.png" alt />
                </figure>
              </div>
              <h2 className="pricing-plan-color mb-0">
                $200 <span className="pricing-free-text">/ Per Month</span>
              </h2>
              <ul className="list-unstyled list-margin-bottom">
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    10 Days Product Testing
                  </span>
                </li>
                <li className="d-inline-block cloud-security-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    Upgrade Anytime Protection
                  </span>
                </li>
                <li className="d-inline-block mb-lg-0 mb-3">
                  <i className="fa-solid fa-check ml-0" />
                  <span className="d-inline-block email-span text-decoration-none list-span">
                    100 Malware Removal
                  </span>
                </li>
                <li className="d-inline-block user-li threat-detection-li">
                  <i className="fa-solid fa-check margin-left-checkk" />
                  <span className="d-inline-block user-span text-decoration-none list-span">
                    24/7 Live Assistance
                  </span>
                </li>
              </ul>
              <div className="order-now-btn">
                <a href="pricing.html" className="text-decoration-none">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPlanSection;
