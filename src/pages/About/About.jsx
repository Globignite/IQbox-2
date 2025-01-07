import Navbar from "../../Components/Navbar";
import Banner from "./Banner";
import AboutUsSection from "../../Components/AboutUsSection";
import WhyChooseusSection from "../../Components/WhyChooseUsSection";
import CtaSection from "../../Components/CtaSection";
import CarouselSection from "../../Components/CarouselSection";
import Footer from "../../Components/Footer";
import FormSection from "../../Components/FormSection";
import OurServicesSection from "../../Components/OurServicesSection";
import OurTeams from "../../Components/OurTeams";
import PartnersSection from "../../Components/PartnersSection";
import PricingPlanSection from "../../Components/PricingPlanSection";
import WhoWeAre from "../../Components/WhoWeAre";

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
      {/* <OurServicesSection /> */}
      {/* <WhoWeAre /> */}
      {/* <PricingPlanSection /> */}
      {/* <OurTeams /> */}
      <CarouselSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default About;
