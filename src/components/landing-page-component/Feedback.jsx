import { Carousel, Image } from 'react-bootstrap';

import './Feedback.css';

const Feedback = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="fs-1 fw-bolder">Testimonial</h1>
        <p className=" mt-3">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>

      <Carousel className="carousel rounded-2 mt-4 " variant="dark">
        <Carousel.Item interval={500} className="carousel-item ">
          <div className="d-flex flex-row gap-5">
            <div className="mt-3">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                alt="Generic placeholder image"
                className="image rounded-circle "
              />
            </div>
            <div>
              <ul className="navbar-nav d-flex flex-row star">
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
              </ul>

              <p className="fw-light">
                “Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod”
              </p>
              <p className="fw-bold  text-black">
                John Dee 32, Bromo
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex flex-row gap-5">
            <div className="mt-3">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                alt="Generic placeholder image"
                className="image rounded-circle "
              />
            </div>
            <div>
              <ul className="navbar-nav d-flex flex-row star">
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
              </ul>

              <p className="fw-light">
                “Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod”
              </p>
              <p className="fw-bold  text-black">
                John Dee 32, Bromo
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex flex-row gap-5">
            <div className="mt-3">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                alt="Generic placeholder image"
                className="image rounded-circle "
              />
            </div>
            <div>
              <ul className="navbar-nav d-flex flex-row star">
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
                <li>
                  <img src="icons/Star 1.png" alt="star" />
                </li>
              </ul>

              <p className="fw-light">
                “Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod”
              </p>
              <p className="fw-bold  text-black">
                John Dee 32, Bromo
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Feedback;
