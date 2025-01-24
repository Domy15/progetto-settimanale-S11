import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const DesktopPlayer = () => { 
        const [volume, setVolume] = useState<number>(50);
        const handleVolumeChange = (e: string) => {
          setVolume(parseInt(e));
        };

  return (
    <Row
      className="d-none d-lg-flex p-2 align-items-center justify-content-center"
      style={{ backgroundColor: "#2C2C2C" }}
    >
      <Col
        xs={2}
        className="d-flex align-items-center p-0 justify-content-center"
      >
        <i className="bi bi-shuffle fs-5 me-4 text-secondary"></i>
        <i className="bi bi-skip-backward-fill fs-3 me-4 text-secondary"></i>
        <i className="bi bi-play-fill fs-1 me-4 text-secondary"></i>
        <i className="bi bi-skip-forward-fill fs-3 me-4 text-secondary"></i>
        <i className="bi bi-repeat fs-5 me-4 text-secondary"></i>
      </Col>
      <Col
        xs={5}
        className="p-2 text-center"
        style={{ backgroundColor: "#4D4D4D" }}
      >
        <i className="bi bi-apple fs-1 text-light"></i>
      </Col>
      <Col xs={2} className="d-flex align-items-center justify-content-center">
        <i className="bi bi-volume-up text-secondary fs-6"></i>
        <input type="range" min="1" max="100" className="slider" value={volume} onChange={(e) => (handleVolumeChange(e.target.value))}></input>
      </Col>
      <Col xs={1} className="text-center">
      <Button variant="danger"><i className="bi bi-person-fill"> </i>Accedi</Button>
      </Col>
    </Row>
  );
};

export default DesktopPlayer