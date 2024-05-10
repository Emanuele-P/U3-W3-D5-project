import { Button, Col, Image, NavLink } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
  setTrackAction,
} from '../redux/actions'
import play from '../assets/playerbuttons/play.png'

function SingleCard({ data }) {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.id)

  const handleSelectTrack = () => {
    console.log('Selecting track:', data)
    dispatch(setTrackAction(data))
  }

  return (
    <Col>
      <NavLink className="track-card text-center">
        <Button className="play-bg" onClick={handleSelectTrack}>
          <Image src={play} className="play" />
        </Button>
        <img
          onClick={handleSelectTrack}
          className="img-fluid"
          src={data.album.cover_big}
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
