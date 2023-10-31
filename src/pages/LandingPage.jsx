import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Service from '../components/landing-page-component/Service';
import ServiceAdvantages from '../components/landing-page-component/ServiceAdvantages';

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
    </>
  );
};

export default LandingPage;
