import { Image } from 'react-bootstrap';

import './Banner.css';
import Button from './Button';
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
            <Button position={'p-2'} text={'Mulai sewa mobil'} />
          </div>
        </div>

        <Image src="./images/img_car.png" alt="mobil"></Image>
      </div>
    </>
  );
};

export default Banner;
