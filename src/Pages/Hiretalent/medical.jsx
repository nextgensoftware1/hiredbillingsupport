
import Contact from '../../components/Contact';
import { Helmet } from 'react-helmet-async';
import Ourcertification from '../../components/Ourcertification';
import IconsService from '../../components/Hire/iconsservice';
import Readygoal from './Readygoal';
import Medicalcore from '../../components/Hire/Medicalcore';
import SuccessNumber from '../../components/Hire/successnumber';
import Medicalspecialties from '../../components/Hire/Medicalspecialties';
import MedicalVA from '../../components/Hire/medicalva';
import Faq from '../../components/Hire/Faq';
import HBSAgencies from '../../components/Hire/HBSAgencies';
import Emr from '../../components/Hire/Emr';
import MedicalHero from '../../components/Hire/Dental/MedicalHero';

function Medical() {
  return (
    <>
      <Helmet>
        <title>Medical Billing Services - HBS</title>
        <meta name="description" content="Get your practice’s revenue to do more with HBS Medical Billing Services. Rife with more than 900 certified billers, and with 98% first pass clean claim rate, our end to end, automated solutions allow for nothing short of clear claiming." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <MedicalHero />
      <IconsService />
      <Readygoal />
      <Medicalspecialties />
      <SuccessNumber />
      <MedicalVA />
      <Medicalcore />
      <Ourcertification />
      <Faq/>
      <HBSAgencies/>
      <Emr/>
      <Contact />
    </>
  );
}

export default Medical;
