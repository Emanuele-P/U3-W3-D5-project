/* eslint-disable react/prop-types */
import { Button, Col, NavLink } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../redux/actions'

function SingleCard({ data }) {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.id)

  return (
    <Col>
      <NavLink className="track-card text-center">
        <img
          className="img-fluid"
          src={data.album.cover_medium}
          alt={`Cover for ${data.title}`}
        />
        <div className="d-flex align-items-top justify-content-evenly">
          <Button
            className="like"
            style={{ background: 'none', border: 'none' }}
            onClick={() => {
              isFav
                ? dispatch(removeFromFavouriteAction(data.id))
                : dispatch(addToFavouriteAction(data.id))
            }}
          >
            <i
              className={`bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}`}
              style={{ fontSize: '20px' }}
            ></i>
          </Button>
          <div className="d-flex flex-column">
            <p className="title">Track: {data.title}</p>
            <p>Artist: {data.artist.name}</p>
          </div>
        </div>
      </NavLink>
    </Col>
  )
}

export default SingleCard
