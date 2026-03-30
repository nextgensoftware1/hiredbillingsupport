
import PricingBanner from "../components/pricinghero";
import PricingDemoForm from "../components/PricingDemoForm";
import PricingBenefits from "../components/PricingBenefits";
import Faqpricing from "../components/faqpricing";
import LogosLoop from "../components/logosloop";
function pricing() {
  return (
    <>
      <PricingBanner />
      <LogosLoop />
  <PricingDemoForm />
  <PricingBenefits />
  <Faqpricing />
   
    </>
  );
}

export default pricing;
