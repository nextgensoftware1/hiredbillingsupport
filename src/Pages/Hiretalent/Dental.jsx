import React from 'react';


import DentalHero from '../../components/Hire/Dental/DentalHero';
import IconsService from '../../components/Hire/iconsservice';
import Dentalteam from '../../components/Hire/Dental/Dentalteam';
import MedicalspecialtiesDental from '../../components/Hire/Dental/MedicalspecialtiesDental';
import Medicalcore from '../../components/Hire/Medicalcore';
import SuccessNumber from '../../components/Hire/successnumber';
import Ourcertification from '../../components/Ourcertification';
import MedicalVA from '../../components/Hire/medicalva';
import Faqdental from '../../components/Hire/Dental/Faqdental';
import HBSAgencies from '../../components/Hire/HBSAgencies';
import Emr from '../../components/Hire/Emr';



function Dental() {
  return (
    <>
      <DentalHero />
            <IconsService />
            <Dentalteam />
            <MedicalspecialtiesDental />
              <Medicalcore />
                <SuccessNumber />
                <Ourcertification />
                <MedicalVA />
                <Faqdental/>
                <HBSAgencies/>
                
      <Emr/>
    </>
  );
}

export default Dental;
