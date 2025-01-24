import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Response } from "../types/Response"

const DinamicCards = () => {
    const [state, setState] = useState<Response[] | []>([])

    const getSongs = async() => {
        try {const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=blackpink')
            if (response.ok) {
                const data = await response.json()
                setState(data.data)
                console.log(data.data);
                
            } else {
                throw new Error('errore nei dati')
            }
        } catch (error) {
            console.log('errore', error);
        }
    }

    useEffect(() => {
        getSongs()
    }, [])

    return (
        <Container>
            <div className="mt-4">
        <h2 className="h6 text-white">Nuove Uscite {">"}</h2>
        <Row className="mt-3">

            {state.map((song, i) => (
                i < 6 && <Col xs={4} lg={2}>
                <Card style={{backgroundColor: '#1F1F1F', border: 'none'}}>
                  <Card.Img variant="top" src={song.album.cover_big} />
                  <Card.Body className="p-0">
                    <Card.Title className="text-gray text-white m-0">
                      {song.album.title}
                    </Card.Title>
                    <Card.Text className="text-secondary">{song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>))}

        </Row>
      </div>
        </Container>
    )
}

export  default DinamicCards