import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.song.currentSong);
  console.log("Current Song:", currentSong);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          {/* Riga per i dettagli della canzone */}
          {currentSong && (
            <Row>
              <Col xs={12}>
                <h5 className="text-white mb-0">Now Playing</h5>
                <p className="text-white mb-0">Track: "{currentSong.title}"</p>
                <p className="text-white">Artist: {currentSong.artist.name}</p>
              </Col>
            </Row>
          )}

          {/* Riga per i componenti del player */}
          <Row className="justify-content-center mt-3">
            <Col xs={6} md={4}>
              <div className="d-flex justify-content-between">
                <Link to="#">
                  <img
                    src="/shuffle.png"
                    alt="shuffle"
                    className="player-button"
                    style={{ width: "20px" }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src="/prev.png"
                    alt="prev"
                    className="player-button"
                    style={{ width: "20px" }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src="/play.png"
                    alt="play"
                    className="player-button"
                    style={{ width: "20px" }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src="/next.png"
                    alt="next"
                    className="player-button"
                    style={{ width: "20px" }}
                  />
                </Link>
                <Link to="#">
                  <img
                    src="/repeat.png"
                    alt="repeat"
                    className="player-button"
                    style={{ width: "20px" }}
                  />
                </Link>
              </div>
              <div className="progress mt-3">
                <div className="progress-bar" role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;


