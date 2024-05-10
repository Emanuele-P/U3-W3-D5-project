import { Col, Container, Nav, Row } from 'react-bootstrap'
import shuffle from '../assets/playerbuttons/shuffle.png'
import prev from '../assets/playerbuttons/prev.png'
import play from '../assets/playerbuttons/play.png'
import next from '../assets/playerbuttons/next.png'
import repeat from '../assets/playerbuttons/repeat.png'

function AppPlayer() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <Nav.Link>
                  <img src={shuffle} alt="shuffle" />
                </Nav.Link>
                <Nav.Link>
                  <img src={prev} alt="prev" />
                </Nav.Link>
                <Nav.Link>
                  <img src={play} alt="play" />
                </Nav.Link>
                <Nav.Link>
                  <img src={next} alt="next" />
                </Nav.Link>
                <Nav.Link>
                  <img src={repeat} alt="repeat" />
                </Nav.Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default AppPlayer
