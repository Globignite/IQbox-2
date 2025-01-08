function ContactCardSection() {
  return (
    <div className="contact-page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 mb-lg-0 mb-md-0 mb-3">
            <div className="offer-section-box">
              <div className="offer-section-inner">
                <figure>
                  <img src="./assets/images/contact-page-img1.png" alt />
                </figure>
              </div>
              <h5>Phone:</h5>
              <a href="" className="text-decoration-none">
                <p className="phone-p">+61 0X0 X0X 0X0X</p>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-lg-0 mb-md-0 mb-3">
            <div className="offer-section-box">
              <div className="offer-section-inner">
                <figure>
                  <img src="./assets/images/contact-page-img2.png" alt />
                </figure>
              </div>
              <h5>Email:</h5>
              <a href="mailto:info@iqbox.com" className="text-decoration-none">
                <p>info@iqbox.com.au</p>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-lg-0 mb-md-0 mb-0">
            <div className="offer-section-box">
              <div className="offer-section-inner">
                <figure>
                  <img src="./assets/images/contact-page-img3.png" alt />
                </figure>
              </div>
              <h5>Location:</h5>
              <p>
                28 gum nut close, North Kellyville, NSW-2155, Sydney, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCardSection;
