import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import Banner from "./Banner";
import ContactCardSection from "../../Components/ContactCardSection";
import FormSection from "../../Components/FormSection";

function Contact() {
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
      <ContactCardSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default Contact;
