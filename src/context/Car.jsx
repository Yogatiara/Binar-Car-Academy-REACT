import { createContext, useEffect, useState } from "react";

import getCarData from "../api/api";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    driverType: null,
    startDate: null,
    filterDriverType: null,
    filterDate: null,
  });

  const { filterDriverType, filterDate, driverType, startDate } =
    filters;

  useEffect(() => {
    setLoading(true);
    getCarData()
      .then((results) => {
        setCarData(results);
      })
      .catch((err) => {
        throw new Error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filterDriverType, filterDate]);

  const handleDriverTypeCar = (type) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      driverType: type,
    }));
  };

  const handleStartDate = (date) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      startDate: date,
    }));
  };
  const filterExecute = () => {
    setFilters({
      ...filters,
      filterDriverType: driverType,
      filterDate: startDate,
    });
  };

  const ctxValue = {
    carData: carData,
    loading: loading,
    filterData: filterDriverType,
    filterDate: filterDate,
    handleDriverTypeCar: handleDriverTypeCar,
    filterExecute: filterExecute,
    handleStartDate: handleStartDate,
  };

  return (
    <CarContext.Provider value={ctxValue}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
