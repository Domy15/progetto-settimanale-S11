import { Col, Container, Row } from "react-bootstrap";

const Explorer = () => {
  return (
    <Container>
        <h2 className="text-white h4 mb-3">Altro da esplorare</h2>
        <Row className="justify-content-between">
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Esplora per genere</p><p className="m-0">{'>'}</p></Col>
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Decenni</p><p className="m-0">{'>'}</p></Col>
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Attività e stati d'animo</p><p className="m-0">{'>'}</p></Col>
      </Row>
      <Row className="justify-content-between">
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Worldwide</p><p className="m-0">{'>'}</p></Col>
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Classifiche</p><p className="m-0">{'>'}</p></Col>
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Audio spaziale</p><p className="m-0">{'>'}</p></Col>
      </Row>
      <Row className="justify-content-between">
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Video musicali</p><p className="m-0">{'>'}</p></Col>
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Nuovi artisti</p><p className="m-0">{'>'}</p></Col>
      <Col xs={12} lg={3} className="bg-dark d-flex justify-content-between p-3 rounded mb-3" style={{color: '#FA586A'}}><p className="m-0">Hit del passato</p><p className="m-0">{'>'}</p></Col>
      </Row>
    </Container>
  );
};

export default Explorer;
