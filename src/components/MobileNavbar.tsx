import { Container, Nav, Navbar } from "react-bootstrap";

const MobileNavbar = () => {
  return (
    <div className=" d-lg-none">
    <Navbar expand="lg" className="navbar-dark" style={{backgroundColor: '#2E2E2E'}}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Novità</Nav.Link>
            <Nav.Link href="#link">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none'}}/>
        <Navbar.Brand href="#home"><img src="src\assets\logos\music.svg" /></Navbar.Brand>
        <Nav.Link href="#link" style={{color: '#FA586A'}}>Accedi</Nav.Link>
      </Container>
    </Navbar>
  </div>
  );
};

export default MobileNavbar;
