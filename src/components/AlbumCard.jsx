import { Col } from 'react-bootstrap';

const AlbumCard = ({ singleSong }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3 text-center">
      <img className="img-fluid mb-2" src={singleSong.album.cover_medium} alt="track" />
      <p>
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;