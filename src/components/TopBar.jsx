import { Col, Nav, Row } from 'react-bootstrap'
import MusicSection from './MusicSection'
import { useSelector, useDispatch } from 'react-redux'
import { getTracksAction } from '../redux/actions'
import { useEffect } from 'react'

function TopBar() {
  const query = useSelector((state) => state.search.query)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Query updated:', query)
    if (query) {
      dispatch(getTracksAction(query))
    }
  }, [query, dispatch])
  return (
    <Col xs={12} md={9} className="offset-md-3">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Nav.Link>TRENDING</Nav.Link>
          <Nav.Link>PODCAST</Nav.Link>
          <Nav.Link>MOODS AND GENRES</Nav.Link>
          <Nav.Link>NEW RELEASES</Nav.Link>
          <Nav.Link>DISCOVER</Nav.Link>
        </Col>
      </Row>
      <Row>
        <MusicSection
          id="search-results"
          title="Search Music"
          query={query || 'billie'}
        />
        <MusicSection id="rock" title="Rock Classics" query="queen" />
        <MusicSection id="pop" title="Pop Culture" query="Katy" />
        <MusicSection
          id="hiphop"
          title="HipHop"
          query="eminem"
          style={{ marginBottom: '7rem' }}
        />
      </Row>
    </Col>
  )
}

export default TopBar
