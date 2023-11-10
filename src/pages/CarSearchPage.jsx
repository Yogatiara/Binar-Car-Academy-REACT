import { useState, useEffect, useContext } from "react";

import Banner from "../components/banner/Banner";
import CarFilter from "../components/car-search-page-component/car-filter/CarFilter";
import AppLayout from "../components/AppLayout";
import CarCard from "../components/car-search-page-component/car-card/CarCard";
import { CarProvider } from "../context/Car";

const CarSearchPage = () => {
  // const [shadow, setShadow] = useState(false);

  // const togleShadow = () => {
  //   setShadow(!shadow);
  // };

  return (
    <CarProvider>
      <AppLayout>
        {/* <span className="overlay" /> */}
        <CarFilter />

        <Banner showButton={false} />

        <div className="container car-card-list ">
          <div className="row row-cols-3 gy-4 mx-auto ml-3">
            <CarCard />
          </div>
        </div>
      </AppLayout>
    </CarProvider>
  );
};

export default CarSearchPage;
