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
            <h6 className="autorix-text text-center">
              Get In Touch With IQBOX
            </h6>
            <h2
              className="text-center aos-init aos-animate"
              data-aos="fade-left"
            >
              "We’re ready to help you secure, scale, and transform your
              business. Connect with our team today."
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
                    className="form-control input-fill bg-white"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className>
                  <input
                    type="text"
                    name="phone"
                    className="form-control input-fill bg-white"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="col-inner">
                  <input
                    type="tel"
                    name="email"
                    className="form-control input-fill bg-white"
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
                    className="form-control border-none bg-white"
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
