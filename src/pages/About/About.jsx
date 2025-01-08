import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import Banner from "./Banner";
import AboutUsSection from "../../Components/AboutUsSection";
import WhyChooseusSection from "../../Components/WhyChooseUsSection";
import CtaSection from "../../Components/CtaSection";
import CarouselSection from "../../Components/CarouselSection";
import FormSection from "../../Components/FormSection";
import PartnersSection from "../../Components/PartnersSection";


function About() {
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
      <AboutUsSection />
      <WhyChooseusSection />
      <PartnersSection />
      <CtaSection />
      <CarouselSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default About;
