import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between">
                <Link to="#">
                  <img src="/shuffle.png" alt="shuffle" className="player-button"   />
                </Link>
                <Link to="#">
                  <img src="/prev.png" alt="prev" className="player-button"  />
                </Link>
                <Link to="#">
                  <img src="/play.png" alt="play" className="player-button"  />
                </Link>
                <Link to="#">
                  <img src="/next.png" alt="next" className="player-button"  />
                </Link>
                <Link to="#">
                  <img src="/repeat.png" alt="repeat" className="player-button"  />
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