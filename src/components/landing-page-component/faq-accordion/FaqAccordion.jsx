import Accordion from 'react-bootstrap/Accordion';
import './FaqAccordion.css';

const FaqAccordion = () => {
  return (
    <>
      <div className="d-flex flex-row faq-accordion" id="faq">
        <div className="text-center faq-title text-xl-start">
          <h1 className="fw-bolder">Frequently Asked Question</h1>
          <p className="fw-light mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div>
          <Accordion defaultActiveKey="0">
            <ul className="navbar-nav d-flex flex-column gap-3">
              <li>
                <Accordion.Item
                  eventKey="0"
                  className="accordion-item"
                >
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Berapa hari minimal sewa mobil lepas kunci?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Berapa hari sebelumnya sabaiknya booking sewa
                    mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Apakah Ada biaya antar-jemput?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </li>

              <li>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Bagaimana jika terjadi kecelakaan
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
