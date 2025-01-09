import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import Banner from "./Banner";
import BlogPostSection from "../../Components/BlogPostSection";

function Blog() {
  return (
    <>
      <div className="home-header-section">
        <figure className="banner-right-img left_icon img">
          <img
            src="./assets/images/header-right-img.png"
            alt
            className="star"
          />
        </figure>
        <Navbar />
        <Banner />
      </div>
      <BlogPostSection />
      <Footer />
    </>
  );
}

export default Blog;
