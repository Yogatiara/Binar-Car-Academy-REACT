import { Navbar, Nav, Container, Image } from 'react-bootstrap';

import RegisterButton from './RegisterButton';

const NavigationBar = () => {
  return (
    <>
      <Navbar className="hexColor-f1f3ff">
        <Container>
          <Navbar.Brand>
            <Image src="./images/logo.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="column-gap-3 fw-medium">
            <Nav.Link>Our Services</Nav.Link>
            <Nav.Link>Why Us</Nav.Link>
            <Nav.Link>Testimonial</Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
            <Nav>
              <RegisterButton />
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
