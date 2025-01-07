function CtaSection() {
  return (
    <section class="our-teams-section overflow-hidden teams-combine-section position-relative">
      <div class="help-section overflow-hidden position-relative">
        <figure class="help-section-img2">
          <img src="public/assets/images/help-section-img2.png" alt="" />
        </figure>
        <div class="container w-75">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              {/* <figure>
                <img
                  src="./assets/images/help-section-img.png"
                  alt=""
                  class="img-fluid"
                />
              </figure> */}
              <div class="help-section-content">
                <h2>"Secure, innovate, and grow with IQBOX’s expertise</h2>
                <div class="form-btn">
                  <a href="./contact">
                    <button type="submit" class="btn btn-primary">
                      Get Started
                    </button>
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

export default CtaSection;
