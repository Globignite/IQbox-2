function WhyChooseusSection() {
  return (
    <section className="pricing-plan-section whychooseus-section overflow-hidden">
      <figure className="about-left-back-img">
        <img
          src="./assets/images/why-choose-left-img.png"
          alt
          className="star"
        />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>Why Choose Us?</h6>
            <h2 className="text-center">3 Benefits of IQBOX</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 mb-md-4 mb-sm-4 mb-0">
            <div className="services-content" data-aos="fade-up">
              <div className="icons-rounded-box">
                <figure className="mb-0">
                  <img src="./assets/images/whychoseus-img1.png" alt />
                </figure>
              </div>
              <h5 className="pricing-plan-color mb-0">
                Cybersecurity Solutions
              </h5>
              <p>
                Our comprehensive cybersecurity offerings help businesses stay
                ahead of evolving threats and meet regulatory compliance.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="services-content" data-aos="fade-up">
              <div className="icons-rounded-box">
                <figure className="mb-0">
                  <img src="./assets/images/whychoseus-img2.png" alt />
                </figure>
              </div>
              <h5 className="pricing-plan-color mb-0">Salesforce Consulting</h5>
              <p>
                Our Salesforce-certified team provides end-to-end solutions that
                improve customer experience, streamline processes, and optimize
                AI-driven data strategies.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="services-content pro-card" data-aos="fade-up">
              <div className="icons-rounded-box">
                <figure className="mb-0">
                  <img src="./assets/images/whychoseus-img3.png" alt />
                </figure>
              </div>
              <h5 className="pricing-plan-color mb-0">
                IT Consulting Services
              </h5>
              <p>
                Our IT services are tailored to help organizations modernize
                their operations, improve efficiency, and enhance scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseusSection;