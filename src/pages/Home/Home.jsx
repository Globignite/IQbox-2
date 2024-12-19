import AboutUsSection from "../../Components/AboutUsSection";
import CarouselSection from "../../Components/CarouselSection";
import Footer from "../../Components/Footer";
import FormSection from "../../Components/FormSection";
import Navbar from "../../Components/Navbar";
import OurServicesSection from "../../Components/OurServicesSection";
import OurTeams from "../../Components/OurTeams";
import PartnersSection from "../../Components/PartnersSection";
import PricingPlanSection from "../../Components/PricingPlanSection";
import WhoWeAre from "../../Components/WhoWeAre";
import Banner from "./Banner";

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
        <Banner />
      </div>
      <OurServicesSection />
      <AboutUsSection />
      <PartnersSection />
      <WhoWeAre />
      <PricingPlanSection />
      <OurTeams />
      <CarouselSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default Home;
