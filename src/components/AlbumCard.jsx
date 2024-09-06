import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, addToFavourite } from '../redux/actions/actions';
import { BsHeartFill } from 'react-icons/bs';

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  
  const favourites = useSelector((state) => state.favourite.list);
  
  const isFavourite = favourites.some(song => song.id === singleSong.id);

  const handleClick = () => {
    dispatch(setCurrentSong(singleSong));
  };

  const handleAddToFavourite = () => {
    dispatch(addToFavourite(singleSong));
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3 text-center">
      <img 
        className="img-fluid mb-2" 
        src={singleSong.album.cover_medium} 
        alt="track" 
        onClick={handleClick} 
      />
      <p className="text-white">
        <span 
          onClick={handleAddToFavourite} 
          style={{ cursor: 'pointer' }} 
        >
          <BsHeartFill
            color={isFavourite ? "gold" : "lightgrey"} 
            size={16}
            className="mr-2 my-auto me-2"
          />
        </span >
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;