import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import WhatsappFloatingButton from './components/WhatsappFloatingButton';
import { metadata } from './utils/metadata';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Pages/Home';
import Medical from './Pages/Hiretalent/medical';
import Dental from './Pages/Hiretalent/Dental';
import RcmSection from './Pages/Rcm';
import Insurance from './Pages/Hiretalent/insurance';
import Pricing from './Pages/pricing';
import About from './Pages/About';
import ContactForm from './Pages/Contact';
import ProviderPortal from './Pages/provider_portal';
import Neurologybillingservices from './Pages/specialitiespage/neurology-billing-services';
import CardiologyBillingServices from './Pages/specialitiespage/cardiology-billing-services';
import EndocrinologyBillingServices from './Pages/specialitiespage/endocrinology-billing';
import PodiatryBillingServices from './Pages/specialitiespage/podiatry-billing';
import OrthopedicBillingServices from './Pages/specialitiespage/orthopedic-billing';
import ObgynBillingServices from './Pages/specialitiespage/obgyn-billing';
import PsychiatryBillingServices from './Pages/specialitiespage/psychiatry-billing';
import NephrologyBillingServices from './Pages/specialitiespage/nephrology-billing';
import Casestudy from './Pages/casestudy';
import ArticleFacilitiesPage from './Pages/article-28-facilities';
import NotFound from './Pages/NotFound';
import HBSMarketingPage from './Pages/HBSMarketingPage';
import PrivacyPolicy from './Pages/privacy-policy';
import TermsConditions from './Pages/terms-conditions';
import ProviderCredential from './Pages/solutions/provider-credential';
import MedicalCoding from './Pages/solutions/medical-coding';
import ARManagement from './Pages/solutions/ar-management';
import DenialManagement from './Pages/solutions/ar-denial&fixation';
import MedicalBillingRCM from './Pages/solutions/medical-billing&rcm';
import MarketingPatient from './Pages/solutions/marketing-patient-engagement';
import Blog from './Pages/Blog';
import HermaThompson from './Pages/case-study/HermaThompson';
import DrAfreenSheikh from './Pages/case-study/DrAfreenSheikh';
import DrLaylaHassan from './Pages/case-study/dr-layla-hassan';
import DrRuthParkin from './Pages/case-study/DrRuthParkin';
import PracticeLaunch from './Pages/practice-launch';
import PayerInsurerEnrolment from './Pages/solutions/payer-insurer-enrollment';
import VirtualHealthcare from './Pages/solutions/virtual-healthcare';
import BillingNephrology from './Pages/blog_details/Billing_Nephrology';
import RcmServicesRevenue from './Pages/blog_details/rcm-services-revenue';
import IndependentBillingServices from './Pages/blog_details/Independent-Blling-Services';
import EndocrinologyBillingCoding from './Pages/blog_details/Endocrinology_Billing_Coding';
import OrthopaedicMedicalBilling from './Pages/blog_details/Orthopaedic_Medical_Billing';
import RcmServices from './Pages/blog_details/RCM_Services';
import ARManagementBlog from './Pages/blog_details/AR_Management_&CashFlow';
import MedicalBillingServices from './Pages/blog_details/Medical_billing_services';
import RevenueCycleManagement from './Pages/blog_details/RevenueCycle_Management';
import MedicalAudit from './Pages/solutions/medical-audit';
import AnalyticsReporting from './Pages/solutions/analytics-reporting';
import ComplianceReporting from './Pages/solutions/compliance-reporting';
import ExplorePartnership from './Pages/consultation/explore_partnership';
import FindServices from './Pages/consultation/find_services';
import QualityAssurance from './Pages/solutions/quality-assurance';
import OperationsManagement from './Pages/solutions/operations-management';
import SmallMedicalPractices from './Pages/Whoweserve/small-medical-practices';
import MediumLargeMedicalPractices from './Pages/Whoweserve/medium-large-medical-practices';
import EnterpriseMedicalOperations from './Pages/Whoweserve/enterprise-medical-operation';
import MemberCentricCare from './Pages/Whoweserve/member-centric-care';
import AgingAR from './Pages/solutions/aging_ar';
import Fqhc from './Pages/Whoweserve/fqhc';
import Devolperportal from './Pages/Whoweserve/devolper_portal';
import CostRoi from './Pages/cost_roi';
import CostEvaluation from './Pages/cost-evaluation';



import StartUps from './Pages/Whoweserve/start-ups';
import Payers from './Pages/Whoweserve/payers';
import MedicalOrderTransmission from './Pages/Whoweserve/medical-order-transmission';




function MetadataManager() {
  const location = useLocation();
  
  const getMetadataForPath = (path) => {
    // Handle dynamic case study routes with doctor slug
    if (path.startsWith('/case-study/')) {
      const slug = path.replace('/case-study/', '');
      if (metadata.caseStudies && metadata.caseStudies[slug]) {
        return metadata.caseStudies[slug];
      }
      return metadata.caseStudy; // fallback to generic case study metadata
    }
    
    switch(path) {
      case '/':
        return metadata.home;
      case '/medical-services':
        return metadata.medical;
      case '/dental-services':
        return metadata.dental;
      case '/rcm-management':
        return metadata.rcm;
      case '/insurance-services':
        return metadata.insurance;
      case '/pricing':
        return metadata.pricing;
      case '/about':
        return metadata.about;
      case '/contact':
        return metadata.contact;
      case '/provider-portal':
        return metadata.providerPortal;
      case '/neurology':
        return metadata.specialties.neurology;
      case '/cardiology':
        return metadata.specialties.cardiology;
      case '/endocrinology':
        return metadata.specialties.endocrinology;
      case '/podiatry-services':
        return metadata.specialties.podiatry;
      case '/orthopedic':
        return metadata.specialties.orthopedic;
      case '/obgyn':
        return metadata.specialties.obgyn;
      case '/psychiatry':
        return metadata.specialties.psychiatry;
      case '/nephrology-services':
        return metadata.specialties.nephrology;
        case '/payers':
          return metadata.payers;
          case '/medical-audit':
            return metadata.medicalAudit;
            case '/compliance-reporting':
              return metadata.complianceReporting;
            case '/analytics-reporting':
              return metadata.analyticsReporting;
            case '/explore-partnership':
              return metadata.explorePartnership || metadata.complianceReporting;
            case '/find-service':
              return metadata.findService;
              case '/quality-assurance':
                return metadata.qualityAssurance;
                case '/operations-management':
                  return metadata.operationsManagement;
                  case '/cost-roi':
                    return metadata.costRoi;
                  
      case '/medical-order-transmission':
        return metadata.medicalOrderTransmission;
        case'/start-ups':
          return metadata.startUps;
      case '/case-study':
        return metadata.caseStudy;
      case '/blog':
        return metadata.blog;
      
        
        
      case '/blog/nephrology-billing':
        return {
          title: 'Reliable Nephrology Medical Billers for Accurate Reimbursement - HBS',
          description: 'Discover how RCM services revolutionize nephrology medical billing with expert solutions for accurate reimbursement, denial management, and revenue optimization.',
          keywords: 'nephrology medical billing, RCM services, revenue cycle management, medical billing services, healthcare billing'
        };
      case '/blog/orthopaedic-billing':
        return {
          title: 'Orthopaedic Medical Billing Services for Accurate Claims & Revenue',
          description: 'Specialized orthopaedic medical billing services to reduce denials, ensure compliance, and improve revenue for orthopaedic practices',
          keywords: 'orthopaedic medical billing, orthopaedic billing, medical billing services, RCM'
        };
      case '/blog/rcm-services':
        return {
          title: 'RCM Services for Healthcare Revenue Cycle Optimization',
          description: 'Expert RCM services by Hired Billing Supports to reduce denials, improve cash flow, and streamline healthcare revenue cycle management.',
          keywords: 'RCM services, revenue cycle management, medical billing, healthcare RCM'
        };
      case '/blog/ar-management-cash-flow':
        return {
          title: 'AR Management & Cash Flow Optimization | Hired Billing Support',
          description: 'Improve collections and stabilize revenue with expert AR management and cash flow optimization services for healthcare providers in the USA.',
          keywords: 'AR management, cash flow optimization, healthcare AR services, accounts receivable management, medical billing'
        };
      case '/blog/endocrinology-billing':
        return {
          title: 'Endocrinology Billing and Coding — Clinic & Hospital Guide - HBS',
          description: 'Comprehensive guide to endocrinology billing and coding for clinics and hospitals in the USA and UK — compliance, coding, and revenue cycle best practices.',
          keywords: 'endocrinology billing, endocrinology coding, medical billing, HIPAA, GDPR'
        };
      case '/blog/rcm-services-revenue':
        return {
          title: 'RCM Services Revenue Solutions for Accurate Medical Billing Growth - HBS',
          description: 'Drive financial stability in healthcare with RCM Services Revenue solutions. Expert revenue cycle management for accurate medical billing, reduced denials, and optimized cash flow.',
          keywords: 'RCM services revenue, revenue cycle management, medical billing services, healthcare billing, RCM billing solutions, financial stability'
        };
      case '/blog/independent-services':
        return {
          title: 'RCM Services Revenue: The Role of Independent Billing Services in Improving Healthcare Finances - HBS',
          description: 'Discover how RCM Services Revenue and Independent Billing Services revolutionize healthcare finances with expert revenue cycle management solutions.',
          keywords: 'RCM Services Revenue, independent billing services, revenue cycle management, healthcare billing, medical billing services'
        };
      case '/hbs-marketing':
        return metadata.hbsMarketing;
      case '/article-28-facilities':
        return metadata.article28;
      case '/privacy-policy':
        return metadata.privacyPolicy;
      case '/terms-conditions':
        return metadata.termsConditions;
      case '/practice-launch':
        return metadata.practiceLaunch;
      case '/payer-insurer-Enrolment':
        return metadata.payerInsurerEnrolment;
      case '/provider-credential':
        return metadata["provider-credential"];
      case '/medical-coding':
        return metadata.medicalCoding;
      case '/ar-management':
        return metadata.armManagement;
      case '/ar-denial&fixation':
        return metadata.arDenialFixation;
      case '/medical-billing&rcm':
        return metadata.medicalBillingRCM;
        case '/virtual-healthcare-solutions':
        return metadata.virtualHealthcare;
        case '/marketing-patient-engagement':
        return metadata.marketingPatientEngagement;
        case '/medium-large-medical-practices':
          return metadata.mediumLargeMedicalPractices;
          case '/enterprise-medical-operation':
            return metadata.enterpriseMedicalOperations;
            case '/old-aging-ar':
              return metadata.agingAR;
              case '/member-centric-care':
                return metadata.memberCentricCare;
                case '/fqhc':
                  return metadata.fqhc;
                  case '/developer-portal':
                    return metadata.developerPortal;
                    case '/cost-evaluation':
                      return metadata.costEvaluation;

         

        
          
          case '/small-medical-practices':
          return metadata.smallMedicalPractices;
      default:
        return metadata.notFound;
    }
  };

  const currentMetadata = getMetadataForPath(location.pathname);

  return (
    <Helmet>
      <title>{currentMetadata.title || 'Hired Billing Support'}</title>
      <meta name="description" content={currentMetadata.description || 'Hired Billing Support provides expert medical, dental, and RCM billing solutions for healthcare practices.'} />
      <meta name="keywords" content={currentMetadata.keywords || 'medical billing, dental billing, RCM, healthcare'} />
      <meta property="og:title" content={currentMetadata.title || 'Hired Billing Support'} />
      <meta property="og:description" content={currentMetadata.description || 'Hired Billing Support provides expert medical, dental, and RCM billing solutions for healthcare practices.'} />
      <meta property="og:image" content="https://hiredbillingsupport.com/assets/images/site_logo/logo_black.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentMetadata.title || 'Hired Billing Support'} />
      <meta name="twitter:description" content={currentMetadata.description || 'Hired Billing Support provides expert medical, dental, and RCM billing solutions for healthcare practices.'} />
    </Helmet>
  );
}

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}



function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/cost-evaluation';
  return (
    <div className="App">
      <ScrollToTop />
      <MetadataManager />
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medical-services" element={<Medical />} />
        <Route path="/dental-services" element={<Dental />} />
        <Route path="/rcm-management" element={<RcmSection />} />
        <Route path="/insurance-services" element={<Insurance />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/provider-portal" element={<ProviderPortal />} />
        <Route path="/practice-launch" element={<PracticeLaunch />} />
        <Route path="/neurology" element={<Neurologybillingservices />} />
        <Route path="/cardiology" element={<CardiologyBillingServices />} />
        <Route path="/endocrinology" element={<EndocrinologyBillingServices />} />
        <Route path="/podiatry-services" element={<PodiatryBillingServices />} />
        <Route path="/orthopedic" element={<OrthopedicBillingServices />} />
        <Route path="/obgyn" element={<ObgynBillingServices />} />
        <Route path="/psychiatry" element={<PsychiatryBillingServices />} />
        <Route path="/nephrology-services" element={<NephrologyBillingServices />} />
        <Route path="/case-study" element={<Casestudy />} />
        <Route path="/case-study/dr-ruth-parkin-edwin" element={<DrRuthParkin />} />
        <Route path="/case-study/herma-thompson" element={<HermaThompson />} />
        <Route path="/case-study/dr-afreen-sheikh" element={<DrAfreenSheikh />} />
        <Route path="/case-study/dr-layla-hassan" element={<DrLaylaHassan />} />
        <Route path="/article-28-facilities" element={<ArticleFacilitiesPage />} />
        <Route path="/hbs-marketing" element={<HBSMarketingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/payer-insurer-Enrolment" element={<PayerInsurerEnrolment />} />
        <Route path="/provider-credential" element={<ProviderCredential />} />
        <Route path="/medical-coding" element={<MedicalCoding />} />
        <Route path="/ar-management" element={<ARManagement />} />
        <Route path="/ar-denial&fixation" element={<DenialManagement />} />
        <Route path="/medical-billing&rcm" element={<MedicalBillingRCM />} />
        <Route path="/virtual-healthcare-solutions" element={<VirtualHealthcare />} />
        <Route path="/marketing-patient-engagement" element={<MarketingPatient />} />
        <Route path="/payers" element={<Payers />} />
        <Route path="/medical-order-transmission" element={<MedicalOrderTransmission />} />
        <Route path="/medical-audit" element={<MedicalAudit />} />
        <Route path="/analytics-reporting" element={<AnalyticsReporting />} />
        <Route path="/compliance-reporting" element={<ComplianceReporting />} />
        <Route path="/explore-partnership" element={<ExplorePartnership />} />
        <Route path="/find-service" element={<FindServices />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/operations-management" element={<OperationsManagement />} />
        <Route path="/start-ups" element={<StartUps />} />
        <Route path="/small-medical-practices" element={<SmallMedicalPractices />} />
        <Route path="/medium-large-medical-practices" element={<MediumLargeMedicalPractices />} />
        <Route path="/enterprise-medical-operation" element={<EnterpriseMedicalOperations />} />
        <Route path="/old-aging-ar" element={<AgingAR />} />
        <Route path="/member-centric-care" element={<MemberCentricCare />} />
        <Route path="/fqhc" element={<Fqhc />} />
        <Route path="/developer-portal" element={<Devolperportal />} />
        <Route path="/cost-roi" element={<CostRoi />} />
        <Route path="/cost-evaluation" element={<CostEvaluation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/nephrology-billing" element={<BillingNephrology />} />
        <Route path="/blog/medical-services" element={<MedicalBillingServices />} />
        <Route path="/blog/ar-management-cash-flow" element={<ARManagementBlog />} />
        <Route path="/blog/endocrinology-billing" element={<EndocrinologyBillingCoding />} />
        <Route path="/blog/orthopaedic-billing" element={<OrthopaedicMedicalBilling />} />
        <Route path="/blog/rcm-services" element={<RcmServices />} />
        <Route path="/blog/rcm-services-revenue" element={<RcmServicesRevenue />} />
        <Route path="/blog/independent-services" element={<IndependentBillingServices />} />
        <Route path="/blog/revenue-cycle-management" element={<RevenueCycleManagement />} />
        {/* 404 catch-all route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <WhatsappFloatingButton /> */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;