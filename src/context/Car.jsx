import { createContext, useEffect, useState } from "react";

import getCarData from "../api/api";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState([
    { message: "Cari mobil yang ingin disewa" },
  ]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    driverType: null,
    startDate: null,
    query: null,
    time: null,
    filterQuery: null,
    filterDriverType: null,
    filterDate: null,
    filterTime: null,
  });

  const {
    filterDriverType,
    filterDate,
    filterQuery,
    filterTime,
    driverType,
    startDate,
    query,
    time,
  } = filters;

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
  }, [filterDriverType, filterDate, filterQuery]);

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

  const handleQuery = (query) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      query: query,
    }));
  };

  const handleTime = (time) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      time: time.substring(0, 2),
    }));
  };

  const filterExecute = () => {
    setFilters({
      ...filters,
      filterDriverType: driverType,
      filterDate: startDate,
      filterQuery: query,
      filterTime: time,
    });
  };

  let filteredCars;

  if (filterQuery) {
    filteredCars = carData.filter(
      (car) =>
        car.available === JSON.parse(filterDriverType) &&
        car.availableAt.substring(0, 10) === filterDate &&
        car.availableAt.substring(11, 13) < filterTime &&
        car.capacity == filterQuery
    );
  } else if (!filterQuery || filterQuery == 0) {
    filteredCars = carData.filter(
      (car) =>
        car.available === JSON.parse(filterDriverType) &&
        car.availableAt.substring(0, 10) === filterDate &&
        car.availableAt.substring(11, 13) < filterTime
    );
  }

  const ctxValue = {
    carData: carData,
    filteredCars: filteredCars,
    loading: loading,
    filterExecute: filterExecute,
    handleDriverTypeCar: handleDriverTypeCar,
    handleStartDate: handleStartDate,
    handleQuery: handleQuery,
    handleTime: handleTime,
  };

  return (
    <CarContext.Provider value={ctxValue}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
