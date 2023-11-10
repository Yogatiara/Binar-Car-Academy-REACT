import { Image } from "react-bootstrap";
import Button from "../../Button";
import Loading from "../../Loading";
import "./CarCard.css";
import { CarContext } from "../../../context/Car";
import { useContext } from "react";

const CarCard = () => {
  const { carData, loading, filterData, filterDate } =
    useContext(CarContext);

  const filteredCars = carData.filter(
    (car) =>
      car.available === JSON.parse(filterData) &&
      car.availableAt.substring(0, 10) === filterDate
  );

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          {filteredCars.length > 0 ? (
            filteredCars.map((car, i) => (
              <div key={i}>
                <div className="col">
                  <div
                    className={`border border-1 p-4 car-height `}
                  >
                    <div className="img-background">
                      <Image
                        className="w-100 h-100"
                        src={car.image}
                        alt=""
                      />
                    </div>

                    <div className="mt-5">
                      <h6>
                        {car.manufacture}/{car.type}
                      </h6>
                      <h5>Rp.{car.rentPerDay}/hari</h5>

                      <div className=" desc-background">
                        <p>{car.description}</p>
                      </div>
                    </div>

                    <div className="car-specification mb-5">
                      <div className="d-flex flex-row">
                        <div>
                          <Image src="./icons/fi_users.png" />
                        </div>
                        <p className="mt-1 ">
                          {car.capacity} orang
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <div>
                          <Image src="./icons/fi_settings.png" />
                        </div>
                        <p className="mt-1 ">
                          {car.transmission}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <div>
                          <Image src="./icons/fi_calendar.png" />
                        </div>
                        <p className="mt-1 ">Tahun {car.year}</p>
                      </div>
                    </div>

                    <Button
                      position="p-3"
                      width={true}
                      fontSize={true}
                      fontWeight={true}
                    >
                      Pilih Mobil
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Mobil tidak ada</div>
          )}
        </>
      )}
    </>
  );
};

export default CarCard;
