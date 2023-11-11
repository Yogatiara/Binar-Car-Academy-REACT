import { useContext } from "react";

import { CarContext } from "../../../context/Car";
import "./FilterInformation.css";
const FilterInformation = () => {
  const { filteredCars } = useContext(CarContext);

  return (
    <>
      <div className="filter-information">
        {filteredCars.length === 0 ? (
          <h5>Cari mobil yang anda yang ingin sewa</h5>
        ) : (
          <h5>
            Mobil yang tersedia : {filteredCars.length} mobil
          </h5>
        )}
      </div>
    </>
  );
};

export default FilterInformation;
