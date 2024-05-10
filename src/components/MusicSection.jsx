import { Col, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function MusicSection({ id, title, style, query }) {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    if (query) {
      fetchTracks(query)
    }
  }, [query])

  const fetchTracks = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      )
      if (response.ok) {
        const data = await response.json()
        setTracks(data.data)
      } else {
        console.log('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Row>
      <Col xs={10} className="music-section" style={style}>
        <div id={id}>
          <h2>{title}</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {tracks.slice(0, 4).map((track) => (
              <SingleCard key={track.id} data={track} />
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default MusicSection
