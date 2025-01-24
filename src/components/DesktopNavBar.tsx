import { Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const DesktopNavBar = () => {
  return (
      <div>
        <Navbar className="bg-apple-subtle navbar-dark d-block px-5">
          <Navbar.Brand href="#home">
            <img src="src\assets\logos\music.svg" />
          </Navbar.Brand>
          <Form className="mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <Nav className="me-auto d-block mt-3">
            <Nav.Link href="#home">
              <i className="bi bi-house text-danger me-3 fs-5"></i>Home
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-border-all text-danger me-3 fs-5"></i>Novità
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-broadcast text-danger me-3 fs-5"></i>Radio
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
  );
}

export default DesktopNavBar;