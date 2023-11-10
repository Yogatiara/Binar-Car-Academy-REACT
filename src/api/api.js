import axios from 'axios';

const getCarData = async () => {
  const carData = await axios.get( "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
  return carData.data;
};

export default getCarData;