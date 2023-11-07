import { useState } from "react";

import Banner from "../components/Banner";
import CarFilter from "../components/car-search-page-component/CarFilter";
import AppLayout from "../components/AppLayout";
import CarCard from "../components/car-search-page-component/CarCard";

const CarSearchPage = () => {
  const [shadow, setShadow] = useState(false);

  const togleShadow = () => {
    setShadow(!shadow);
  };

  return (
    <div>
      <AppLayout>
        {shadow && <span className="overlay" />}

        <CarFilter onClick={togleShadow} />

        <Banner showButton={false} />

        <div className="container">
          <div className="row row-cols-3 gy-4 mx-auto ml-3">
            <CarCard col="col" />
            <CarCard col="col" />
            <CarCard col="col" />
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default CarSearchPage;
