import { Card, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-white h1">Novità</h1>
      <hr style={{ color: "white" }} />
      <Row>
        <Col xs={6}>
          <h4 className="text-secondary" style={{fontSize: '0.8em'}}>
            NUOVA STAZIONE RADIO
          </h4>
          <p className="text-white" style={{height: '2em'}}>
            Rilassati, al resto pensiamo noi.
            Ascolta Apple Music Chill
          </p>
          <img
            src="src\assets\images\1a.png"
            className="rounded w-100"
          />
        </Col>
        <Col xs={6}>
          <h4 className="text-secondary" style={{fontSize: '0.8em'}}>
            NUOVA STAZIONE RADIO
          </h4>
          <p className="text-white" style={{height: '2em'}}>
            Ecco la nuova casa della musica latina
          </p>       
          <img
            src="src\assets\images\1b.png"
            className="rounded w-100"
          />
        </Col>
      </Row>
      <div className="mt-4">
        <h2 className="h6 text-white">Nuovi Episodi Radio {">"}</h2>
        <Row className="mt-3">
          <Col xs={4} lg={2}>
            <Card style={{backgroundColor: '#1F1F1F', border: 'none'}}>
              <Card.Img variant="top" src="src\assets\images\2a.png" />
              <Card.Body className="m-0 p-0">
                <Card.Title className="text-white fs-6" style={{fontWeight: 'normal'}}>Pròlogo con Abuelo</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2}>
          <Card style={{backgroundColor: '#1F1F1F', border: 'none'}}>
              <Card.Img variant="top" src="src\assets\images\2b.png" />
              <Card.Body className="m-0 p-0">
                <Card.Title className="text-white fs-6" style={{fontWeight: 'normal'}}>The Wanderer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2}>
          <Card style={{backgroundColor: '#1F1F1F', border: 'none'}}>
              <Card.Img variant="top" src="src\assets\images\2c.png" />
              <Card.Body className="m-0 p-0">
                <Card.Title className="text-white fs-6" style={{fontWeight: 'normal'}}>Michael Bublè & Carly Pearce</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="d-none d-lg-block">
          <Card style={{backgroundColor: '#1F1F1F', border: 'none'}}>
              <Card.Img variant="top" src="src\assets\images\2e.png" />
              <Card.Body className="m-0 p-0">
                <Card.Title className="text-white fs-6" style={{fontWeight: 'normal'}}>Michael Bublè & Carly Pearce</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="d-none d-lg-block">
          <Card style={{backgroundColor: '#1F1F1F', border: 'none'}}>
              <Card.Img variant="top" src="src\assets\images\2f.png" />
              <Card.Body className="m-0 p-0">
                <Card.Title className="text-white fs-6" style={{fontWeight: 'normal'}}>Michael Bublè & Carly Pearce</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
