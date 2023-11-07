import { Image } from "react-bootstrap";

import Button from "../../components/Button";
import "./CarCard.css";

// eslint-disable-next-line react/prop-types
const CarCard = ({ col }) => {
  return (
    <>
      <div className={`${col}`}>
        <div className={` border border-1 p-4 car-card-list`}>
          <Image
            className="w-100"
            src="./images/car_example.png"
            alt=""
          />

          <div>
            <h6>Nama/Tipe Mobil</h6>
            <h5>Rp.4000000/ hari</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>

          <div className="car-specification mt-3">
            <div className="d-flex flex-row">
              <div>
                <Image src="./icons/fi_users.png" />
              </div>
              <p className="mt-1 ">4 orang</p>
            </div>
            <div className="d-flex flex-row">
              <div>
                <Image src="./icons/fi_settings.png" />
              </div>
              <p className="mt-1 ">4 orang</p>
            </div>
            <div className="d-flex flex-row">
              <div>
                <Image src="./icons/fi_calendar.png" />
              </div>
              <p className="mt-1 ">4 orang</p>
            </div>
          </div>

          <div className="mt-5">
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
    </>
  );
};

export default CarCard;
