import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../redux/action";
import { Response } from "../types/Response";

interface State {
  response: Response[] | [];
}

const DinamicCards = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: State) => state.response);

  useEffect(() => {
    dispatch(getSong());
  }, []);

  return (
    <Container>
      <div className="mt-4">
        <h2 className="h6 text-white">Nuove Uscite {">"}</h2>
        <Row className="mt-3">
          {songs.map(
            (song: Response, i: number) =>
              i < 6 && (
                <Col xs={4} lg={2}>
                  <Card style={{ backgroundColor: "#1F1F1F", border: "none" }}>
                    <Card.Img variant="top" src={song.album.cover_big} />
                    <Card.Body className="p-0">
                      <Card.Title className="text-gray text-white m-0">
                        {song.album.title}
                      </Card.Title>
                      <Card.Text className="text-secondary">
                        {song.artist.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
          )}
        </Row>
      </div>
    </Container>
  );
};

export default DinamicCards;
