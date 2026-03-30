
import HeroSection from "../components/Hire/Rcm/rcmhero";
// import WhyChooseSection from "../components/Hire/Rcm/WhyChoose";
import ServicesSection from "../components/Hire/Rcm/ServicesSection";
import RcmFeatureList from "../components/Hire/Rcm/RcmFeatureList";
// import StatsSection from "../components/Hire/Rcm/StatsSection";
import MedicalClaimsBilling from "../components/Hire/Rcm/MedicalClaimsBilling";
import Ourcertification from "../components/Ourcertification";
import NationwideAvailability from "../components/Hire/Rcm/NationwideAvailability";
import HBSAgencies from "../components/Hire/HBSAgencies";
import Trustbilling from "../components/Hire/Rcm/Trustbilling";
import DedicatedBillers from "../components/DedicatedBillers";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqRcm from "../components/Hire/Rcm/Rcmfaq";

const Rcm = () => {
  return (
    <>
      {/* Hero Section with CTA Form */}
      <HeroSection />

      {/* Feature/Benefit Cards */}
      <RcmFeatureList />

      {/* Why Choose HBS Section */}
      {/* <WhyChooseSection /> */}

      {/* Services Offered Section */}
      <ServicesSection />
   
     

      {/* Key Stats & Metrics */}
      {/* <StatsSection /> */}

      {/* Medical Claims Billing Details */}
      <MedicalClaimsBilling />
       <Trustbilling />
       <DedicatedBillers />

      {/* Certifications & Compliance */}
      <Ourcertification />

      {/* Nationwide Availability */}
      <NationwideAvailability />

      {/* Partners & Agencies */}
      <HBSAgencies />
      <TestimonialsSection />
      <FaqRcm />
      
    </>
  );
};

export default Rcm;

