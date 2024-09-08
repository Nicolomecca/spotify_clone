import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, addToFavourite, removeToFavourite } from '../redux/actions/actions';
import { BsHeartFill } from 'react-icons/bs';

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  
  const favourites = useSelector((state) => state.favourite.list);
  
  const favouriteIds = favourites.map(song => song.id);
  const isFavourite = favouriteIds.includes(singleSong.id);

  const handleClick = () => {
    dispatch(setCurrentSong(singleSong));
  };

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeToFavourite(singleSong));
    } else {
      dispatch(addToFavourite(singleSong));
    }
  };

  return (
    <Col  className="mb-3 text-center">
      <img 
        className="img-fluid mb-2" 
        src={singleSong.album.cover_medium} 
        alt="track" 
        onClick={handleClick} 
      />
      <p className="text-white">
        <span 
          onClick={handleToggleFavourite} 
          style={{ cursor: 'pointer' }} 
        >
          <BsHeartFill
            color={isFavourite ? "gold" : "lightgrey"} 
            size={16}
            className="mr-2 my-auto me-2"
          />
        </span>
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;
