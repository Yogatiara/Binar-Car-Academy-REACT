import { Image } from 'react-bootstrap';

import './service.css';

const Service = () => {
  return (
    <>
      <div className="d-flex flex-row gap-5" id="service">
        <div>
          <Image src="./images/img_service.png"></Image>
        </div>

        <div className="mt-4">
          <h2 className="fw-bold">
            Best Car Rental for any kind of trip in Karang Joang!
          </h2>
          <p className="my-3 ">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
            harga lebih murah dibandingkan yang lain, kondisi mobil
            baru, serta kualitas pelayanan terbaik untuk perjalanan
            wisata, bisnis, wedding, meeting, dll.
          </p>

          <ul className="p-0">
            <li className="d-flex flex-row gap-3 mb-1">
              <div>
                <img src="icons/check_list.png" alt="" />
              </div>
              <p className="-mt-1">
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
            </li>

            <li className="d-flex flex-row gap-3">
              <div>
                <img src="icons/check_list.png" alt="" />
              </div>
              <p className="-mt-1">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
            </li>

            <li className="d-flex flex-row gap-3">
              <div>
                <img src="icons/check_list.png" alt="" />
              </div>
              <p className="-mt-1">
                Sewa Mobil Jangka Panjang Bulanan
              </p>
            </li>

            <li className="d-flex flex-row gap-3">
              <div>
                <img src="icons/check_list.png" alt="" />
              </div>
              <p className="-mt-1">
                Gratis Antar - Jemput Mobil di Bandara
              </p>
            </li>

            <li className="d-flex flex-row gap-3">
              <div>
                <img src="icons/check_list.png" alt="" />
              </div>
              <p className="-mt-1">
                Layanan Airport Transfer / Drop In Out
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Service;
