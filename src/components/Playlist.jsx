import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

const Playlist = () => {
  const favourites = useSelector((state) => state.favourite.list);

  return (
    <div className="playlist">
      <h2 className="text-white mb-3">Your Playlist</h2>
      {favourites.length === 0 ? (
        <p>No favorite songs added yet.</p>
      ) : (
        <Row className="sidebarMargin">
          <h2 className ='text-white ms-4 mb-4'>Yours Playlist</h2>
          {favourites.map((song) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-3 text-center"
              key={song.id}
            >
              <img
                className="img-fluid mb-2"
                src={song.album.cover_medium}
                alt="track"
              />
              <p className="text-white">
                Track: "{song.title}"<br />
                Artist: {song.artist.name}
              </p>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Playlist;
