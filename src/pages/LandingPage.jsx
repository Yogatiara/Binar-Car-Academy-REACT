import Banner from '../components/Banner';
import Service from '../components/landing-page-component/Service';
import ServiceAdvantages from '../components/landing-page-component/ServiceAdvantages';
import Feedback from '../components/landing-page-component/Feedback';
import RentalCard from '../components/landing-page-component/RentalCard';
import FaqAccordion from '../components/landing-page-component/FaqAccordion';
import AppLayout from '../components/AppLayout';

const LandingPage = () => {
  return (
    <AppLayout>
      <Banner showButton={true} />

      {/* Service */}
      <div className="mx-5">
        <Service />
      </div>

      <div className="mx-118px mt-160px">
        <ServiceAdvantages />
      </div>
      {/* End service section */}

      {/* Feedback */}
      <div className="mt-160px align-middle">
        <Feedback />
      </div>
      {/* end feedback section */}

      <div className="mx-118px mt-160px text-center">
        <RentalCard />
      </div>

      <div className="mx-118px mt-160px">
        <FaqAccordion />
      </div>
    </AppLayout>
  );
};

export default LandingPage;
