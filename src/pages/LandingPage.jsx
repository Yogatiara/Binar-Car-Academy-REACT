import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Service from '../components/landing-page-component/Service';
import ServiceAdvantages from '../components/landing-page-component/ServiceAdvantages';
import Feedback from '../components/landing-page-component/Feedback';
import RentalCard from '../components/landing-page-component/RentalCard';

const LandingPage = () => {
  return (
    <>
      {/* Hero section */}
      <NavigationBar />
      <Banner />
      {/* End hero section */}

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
    </>
  );
};

export default LandingPage;
