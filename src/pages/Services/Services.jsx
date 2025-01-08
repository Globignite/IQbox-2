import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import Banner from "./Banner";
import OurServicesSection from "../../Components/OurServicesSection";
import WhatWeDo from "../../Components/WhatWeDo";
import CarouselSection from "../../Components/CarouselSection";
import FormSection from "../../Components/FormSection";

function Services() {
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
      <OurServicesSection />
      <WhatWeDo />
      <CarouselSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default Services;
