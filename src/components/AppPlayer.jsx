import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap'
import shuffle from '../assets/playerbuttons/shuffle.png'
import prev from '../assets/playerbuttons/prev.png'
import play from '../assets/playerbuttons/play.png'
import next from '../assets/playerbuttons/next.png'
import repeat from '../assets/playerbuttons/repeat.png'
import { useDispatch, useSelector } from 'react-redux'
import img from '../assets/image-1.jpg'
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../redux/actions'

function AppPlayer() {
  const dispatch = useDispatch()
  const trackData = useSelector((state) => state.setTrack.currentTrack)
  const favourites = useSelector((state) => state.favourite.list)
  const isFav = trackData ? favourites.includes(trackData.id) : false

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="offset-lg-3 offset-xl-2">
          <Row className="h-100 d-flex mx-auto align-items-center justify-content-center justify-content-md-between">
            <Col
              md={3}
              className="current-track d-none d-md-flex justify-content-start"
            >
              {trackData ? (
                <>
                  <img
                    src={trackData.album.cover_medium}
                    style={{ height: '60px', width: '60px' }}
                  />
                  <div className="d-flex flex-column">
                    <h6 className="title m-0">{trackData.title}</h6>
                    <small className="m-0">{trackData.artist.name}</small>
                  </div>
                  <Button
                    className="like"
                    style={{ background: 'none', border: 'none' }}
                    onClick={() => {
                      {
                        trackData && isFav
                          ? dispatch(removeFromFavouriteAction(trackData.id))
                          : dispatch(addToFavouriteAction(trackData.id))
                      }
                    }}
                  >
                    <i
                      className={`bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}`}
                      style={{ fontSize: '20px' }}
                    ></i>
                  </Button>
                </>
              ) : (
                <>
                  <div className="d-flex align-items-center justify-content-center">
                    <Image
                      src={img}
                      style={{ height: '60px', width: '60px' }}
                    />
                  </div>
                </>
              )}
            </Col>
            <Col xs={8} md={6} lg={5} className="playerControls">
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
            <Col md={3}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default AppPlayer
