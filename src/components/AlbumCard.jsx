import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/actions/actions';

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentSong(singleSong)); 
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3 text-center" onClick={handleClick}>
      <img className="img-fluid mb-2" src={singleSong.album.cover_medium} alt="track" />
      <p>
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;