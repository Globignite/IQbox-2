

function FormSection() {
  return (
    <section className="contact-us-form">
      <figure className="about-left-back-img">
        <img
          src="./assets/images/contact-before-img.png"
          alt
          className="star"
        />
      </figure>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h6 className="autorix-text text-center">Get Started Now</h6>
            <h2
              className="text-center aos-init aos-animate"
              data-aos="fade-left"
            >
              Send us a Message
            </h2>
          </div>
        </div>
        <form id="form_id" method="post" action="contact-form.php">
          <div className="contact-us-wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className>
                  <input
                    type="text"
                    name="name"
                    className="form-control input-fill"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className>
                  <input
                    type="text"
                    name="phone"
                    className="form-control input-fill"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="col-inner">
                  <input
                    type="tel"
                    name="email"
                    className="form-control input-fill"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="col-inner-msg">
                  <textarea
                    name="comments"
                    rows={3}
                    placeholder="Message"
                    className="form-control border-none"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="form-btn">
              <button type="submit" className="btn btn-primary">
                Submit Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
