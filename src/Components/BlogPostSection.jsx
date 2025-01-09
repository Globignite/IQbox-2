function BlogPostSection() {
  return (
    <section className="blog-posts overflow-hidden">
      <div className="container">
        <div className="row">
          <div id="blog" className="three-column col-xl-12" data-aos="fade-up">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="float-left w-100 post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    <div className="post-image">
                      <a href="#">
                        <img alt src="assets/images/standard_post_img01.jpg" />
                      </a>
                      <span className="post-meta-category">
                        <a href>Lifestyle</a>
                      </span>
                    </div>
                    <div className="post-item-description">
                      <span className="post-meta-date"> Jan 21, 2017 </span>
                      <span className="post-meta-comments">
                        <a href> 33 Comments </a>
                      </span>
                      <h2>
                        <a href="#">Standard post with a single image </a>
                      </h2>
                      <p>
                        Curabitur pulvinar euismod ante, ac sagittis ante
                        posuere ac. Vivamus luctus commodo dolor porta feugiat.
                      </p>
                      <a
                        href="#"
                        className="item-link text-decoration-none"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="float-left w-100 post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    <div
                      id="blogslider"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item">
                          <img
                            src="assets/images/standard_post_img02.jpg"
                            alt
                          />
                        </div>
                        <div className="carousel-item active carousel-item-left">
                          <img
                            src="assets/images/standard_post_img04.jpg"
                            alt
                          />
                        </div>
                        <div className="carousel-item carousel-item-next carousel-item-left">
                          <img
                            src="assets/images/standard_post_img06.jpg"
                            alt
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#blogslider"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" />
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#blogslider"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" />
                      </a>
                    </div>
                    <span className="post-meta-category">
                      <a href>Technology</a>
                    </span>
                    <div className="post-item-description">
                      <span className="post-meta-date"> an 21, 2017 </span>
                      <span className="post-meta-comments">
                        <a href> 33 Comments </a>
                      </span>
                      <h2>
                        <a href="#">Simplicity, a post with slider gallery</a>
                      </h2>
                      <p>
                        Curabitur pulvinar euismod ante, ac sagittis ante
                        posuere ac. Vivamus luctus commodo dolor porta feugiat.
                      </p>
                      <a
                        href="#"
                        className="item-link text-decoration-none"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="float-left w-100 post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    <div className="post-image">
                      <a href="#">
                        <img alt src="assets/images/standard_post_img03.jpg" />
                      </a>
                      <span className="post-meta-category">
                        <a href="#">Science</a>
                      </span>
                    </div>
                    <div className="post-item-description">
                      <span className="post-meta-date"> Jan 21, 2017 </span>
                      <span className="post-meta-comments">
                        <a href> 33 Comments </a>
                      </span>
                      <h2>
                        <a href="#">Standard post with a single image </a>
                      </h2>
                      <p>
                        Curabitur pulvinar euismod ante, ac sagittis ante
                        posuere ac. Vivamus luctus commodo dolor porta feugiat.
                      </p>
                      <a
                        href="#"
                        className="item-link text-decoration-none"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="float-left w-100 post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    <div className="post-audio position-relative">
                      <a href="#">
                        <img alt src="assets/images/standard_post_img05.jpg" />
                      </a>
                      <span className="post-meta-category">
                        <a href>Audio</a>
                      </span>
                      <audio className="position-absolute" controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source
                          src="assets/audio/horse.mp3"
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>
                    <div className="post-item-description">
                      <span className="post-meta-date"> Jan 21, 2017 </span>
                      <span className="post-meta-comments">
                        <a href> 33 Comments </a>
                      </span>
                      <h2>
                        <a href="#">
                          Self Hosted HTML5 Audio (mp3) with image cover
                        </a>
                      </h2>
                      <p>
                        Curabitur pulvinar euismod ante, ac sagittis ante
                        posuere ac. Vivamus luctus commodo dolor porta feugiat.
                      </p>
                      <a
                        href="#"
                        className="item-link text-decoration-none"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="float-left w-100 post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    <div className="post-video">
                      <div className="embed-container">
                        <iframe src="https://player.vimeo.com/video/157467640?background=1" />
                      </div>
                      <span className="post-meta-category">
                        <a href>Video</a>
                      </span>
                    </div>
                    <div className="post-item-description">
                      <span className="post-meta-date"> Jan 21, 2017 </span>
                      <span className="post-meta-comments">
                        <a href> 33 Comments </a>
                      </span>
                      <h2>
                        <a href="#">This is a example post with Vimeo video</a>
                      </h2>
                      <p>
                        Curabitur pulvinar euismod ante, ac sagittis ante
                        posuere ac. Vivamus luctus commodo dolor porta feugiat.
                      </p>
                      <a
                        href="#"
                        className="item-link text-decoration-none"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="float-left w-100 post-item border mb-4">
                  <div className="post-item-wrap position-relative">
                    <div className="post-video">
                      <div className="fluid-width-video-wrapper">
                        <iframe
                          width={560}
                          height={376}
                          src="https://www.youtube.com/embed/dA8Smj5tZOQ"
                        />
                      </div>
                      <span className="post-meta-category">
                        <a href>Video</a>
                      </span>
                    </div>
                    <div className="float-left w-100 post-item-description">
                      <span className="post-meta-date"> Jan 21, 2017 </span>
                      <span className="post-meta-comments">
                        <a href> 33 Comments </a>
                      </span>
                      <h2>
                        <a href="#">This is a example post with YouTube</a>
                      </h2>
                      <p>
                        Curabitur pulvinar euismod ante, ac sagittis ante
                        posuere ac. Vivamus luctus commodo dolor porta feugiat.
                      </p>
                      <a
                        href="#"
                        className="item-link text-decoration-none"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
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

export default BlogPostSection;
