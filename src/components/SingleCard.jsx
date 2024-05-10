/* eslint-disable react/prop-types */
import { Col, NavLink } from 'react-bootstrap'

function SingleCard({ data }) {
  return (
    <Col>
      <NavLink className="track-card text-center">
        <img
          className="img-fluid"
          src={data.album.cover_medium}
          alt={`Cover for ${data.title}`}
        />
        <p>
          Track: `{data.title}`<br />
          Artist: {data.artist.name}
        </p>
      </NavLink>
    </Col>
  )
}

export default SingleCard
