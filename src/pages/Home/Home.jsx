import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import Hero from "./Hero";
import AboutUsSection from "../../Components/AboutUsSection";
import CarouselSection from "../../Components/CarouselSection";
import FormSection from "../../Components/FormSection";
import OurServicesSection from "../../Components/OurServicesSection";
import PartnersSection from "../../Components/PartnersSection";


function Home() {
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
        <Hero />
      </div>
      <OurServicesSection />
      <AboutUsSection />
      <PartnersSection />
      <CarouselSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default Home;
