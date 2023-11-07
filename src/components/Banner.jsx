import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "./Banner.css";
import Button from "./Button";
const Banner = ({ showButton }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hexColor-f1f3ff d-flex flex-row pt-5 column-gap-5">
        <div className="ml mt-5">
          <h1 className="fw-bold">
            Sewa & Rental Mobil Terbaik di Kawasan Karang Joang
          </h1>
          <div className="mt-4 w-75">
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan
              mobil kualitas terbaik dengan harga terjangkau. Selalu
              siap melayani kebutuhanmu untuk sewa mobil selama 24
              jam.
            </p>
            {showButton && (
              <Button
                position={"p-2"}
                navigate={() => navigate("/carSearch")}
              >
                Mulai sewa mobil
              </Button>
            )}
          </div>
        </div>

        <Image
          className="w-100"
          src="./images/img_car.png"
          alt="mobil"
        ></Image>
      </div>
    </>
  );
};

Banner.propTypes = {
  showButton: PropTypes.bool,
};

export default Banner;
