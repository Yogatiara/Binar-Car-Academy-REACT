import Image from 'react-bootstrap/Image';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-row footer">
        <address>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p id="no-tlp">081-233-334-808</p>
        </address>

        <ul className="navbar-nav gap-2">
          <li className="p-0">
            <a className="nav-link p-0  fs-6" href="#">
              Our Servis
            </a>
          </li>
          <li>
            <a className="nav-link p-0 fs-6" href="#">
              Why Us
            </a>
          </li>
          <li>
            <a className="nav-link p-0 fs-6" href="#">
              Testimonial
            </a>
          </li>
          <li id="faq">
            <a className="nav-link p-0 fs-6" href="#">
              FAQ
            </a>
          </li>
        </ul>

        <div className="social-media">
          <h6 className="mb-3">Connect with us</h6>

          <ul className="navbar-nav flex-row gap-3">
            <li>
              <img src="./icons/icon_facebook.png" alt="facebook" />
            </li>

            <li>
              <img src="./icons/icon_instagram.png" alt="instagram" />
            </li>

            <li>
              <img src="./icons/icon_twitter.png" alt="instagram" />
            </li>

            <li>
              <img src="./icons/icon_mail.png" alt="email" />
            </li>

            <li>
              <img src="./icons/icon_twitch.png" alt="" />
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-3">Copyright Binar 2023</h6>
          <Image src="./images/logo.png" alt="logo"></Image>
        </div>
      </div>
    </>
  );
};

export default Footer;
