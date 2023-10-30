import { Image } from 'react-bootstrap';

import './Banner.css';
import RentalButton from './RentalButton';

const Banner = () => {
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
            <RentalButton />
          </div>
        </div>

        <Image src="./img_car.png" alt="mobil"></Image>
      </div>
    </>
  );
};

export default Banner;
