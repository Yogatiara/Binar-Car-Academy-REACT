import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Service from '../components/landing-page-component/Service';

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
    </>
  );
};

export default LandingPage;
