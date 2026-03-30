
import CountUpStats from "../components/CountUpStats";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import HireService from "../components/Hireservicehbs";
import Medicaldesc from "../components/Medicaldesc";
import Ourcertification from "../components/Ourcertification";
import PricingDemoForm from "../components/PricingDemoForm";
// import SavingsCalculator from "../components/SavingsCalculator";
import Servicessec from "../components/Servicessec";
import WhyHireWithWorkdeskVA from "../components/WhyHire";
import Solution_Pillars from "../components/Solution_Pillars";
import LatestInsights from "../components/Latest_Insights";

function Home() {
  return (
    <>
      <Hero />
      <Solution_Pillars />
      <WhyHireWithWorkdeskVA />
      
      <CountUpStats/>
      <HireService/>
      <Medicaldesc/>
      <Servicessec/>
      {/* <SavingsCalculator/> */}
      <LatestInsights/>
      <Ourcertification/>
      <PricingDemoForm/>
      <Faq/>
      
    </>
  );
}
export default Home;
  
