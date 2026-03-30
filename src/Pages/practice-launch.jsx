import Hero from "../components/practicelaunch/hero";
import CTABox from "../components/practicelaunch/CTABox";
import Timeline from "../components/practicelaunch/Timeline";
import Services from "../components/practicelaunch/Services";
import FinancialTable from "../components/practicelaunch/FinancialTable";
import Mistakes from "../components/practicelaunch/Mistakes";
import RelatedServices from "../components/practicelaunch/RelatedServices";
import FAQ from "../components/practicelaunch/FAQ";
import Secudal from "../components/practicelaunch/secudal";
import {  FaIdBadge, FaFileSignature, FaBullhorn, FaHeartbeat, FaUsers, FaGlobe, FaLaptopMedical, FaHandsHelping } from 'react-icons/fa';

const practicelaunch = () => {
  return (
   <>
    <Hero />
    <CTABox />
     <Timeline />
     <Services />
      <FinancialTable />
       <Mistakes />
      <section style={{ background: '#fff', padding: '60px 0' }}>
             <div className="container">
               <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '14px' }}>
                 Why These Services Matter
               </h2>
               <p style={{ textAlign: 'center', color: '#444', fontSize: '1rem', maxWidth: 600, margin: '0 auto 24px auto' }}>
                 Our comprehensive suite of services ensures your practice is ready to grow, compliant, and positioned for success from day one.
               </p>
                 <div
                   className="row"
                   style={{
                     display: 'flex',
                     flexWrap: 'wrap',
                     justifyContent: 'center',
                     alignItems: 'stretch',
                     gap: '14px',
                     marginLeft: 0,
                     marginRight: 0,
                   }}
                 >
                 <CardItem
                   icon={<FaIdBadge />}
                   title="Credentialing & Enrolment Services"
                   desc="Get your providers credentialed and enrolled with payers quickly, so you can start billing without delay."
                 />
                 <CardItem
                   icon={<FaFileSignature />}
                   title="Payer & Insurer Enrolment"
                   desc="We handle all major payer and insurer Enrolments, ensuring your practice is in-network and ready to serve patients."
                 />
                 <CardItem
                   icon={<FaBullhorn />}
                   title="Business Branding"
                   desc="Build a strong, recognizable brand for your healthcare business with our expert branding solutions."
                 />
                 <CardItem
                   icon={<FaHeartbeat />}
                   title="Health Care Advertising"
                   desc="Reach more patients with targeted healthcare advertising tailored to your specialty and location."
                 />
                 <CardItem
                   icon={<FaUsers />}
                   title="Patient Engagement"
                   desc="Boost patient satisfaction and retention with proven engagement strategies and tools."
                 />
                 <CardItem
                   icon={<FaGlobe />}
                   title="Digital Marketing"
                   desc="Grow your online presence and attract new patients with comprehensive digital marketing services."
                 />
                 <CardItem
                   icon={<FaLaptopMedical />}
                   title="EHR/EMR Integration"
                   desc="Integrate your billing with EHR/EMR systems for efficient workflow and regulatory compliance."
                 />
                 <CardItem
                   icon={<FaHandsHelping />}
                   title="Billing Setup & Support"
                   desc="From initial setup to ongoing support, we ensure your billing operations run smoothly and efficiently."
                 />
         </div>
       </div>
     </section>
       <RelatedServices />
       <FAQ />
       <Secudal />
       
     
   </>
  );
};
function CardItem({ icon, title, desc }) {
  return (
    <div
      className="col-md-3 card-feature"
      style={{
        background: '#f9fafd',
        borderRadius: '14px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        padding: '22px 16px',
        margin: '8px',
        minWidth: 220,
        maxWidth: 320,
        textAlign: 'center',
        transition: 'box-shadow 0.3s, border 0.3s, transform 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(36,118,255,0.10)';
        e.currentTarget.style.border = '1.5px solid #2476ff';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.025)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{ fontSize: '2rem', color: '#2476ff', marginBottom: '10px', transition: 'color 0.3s' }}>
        {icon}
      </div>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '7px', letterSpacing: '-0.2px' }}>{title}</h3>
      <p style={{ color: '#333', fontSize: '0.97rem', lineHeight: '1.5', margin: 0 }}>{desc}</p>
    </div>
     
  );
}
export default practicelaunch;
