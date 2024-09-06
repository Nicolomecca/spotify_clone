import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import MusicSection from './MusicSection';

const Main = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="justify-content-between mb-5">
        <Col xs={12} md={6} lg={11} className="mainLinks d-none d-md-flex mb-3 mt-3">
          <Link to="/trending" className="text-black font-weight-bold  flex-fill  text-decoration-none text-white">
            TRENDING
          </Link>
          <Link to="/podcast" className="text-black font-weight-bold  flex-fill text-decoration-none text-white">
            PODCAST
          </Link>
          <Link to="/moods" className="text-black font-weight-bold  flex-fill  text-decoration-none text-white">
            MOODS AND GENRES
          </Link>
          <Link to="/new-releases" className="text-black font-weight-bold  flex-fill  text-decoration-none text-white">
            NEW RELEASES
          </Link>
          <Link to="/discover" className="text-black font-weight-bold  flex-fill  text-decoration-none text-white">
            DISCOVER
          </Link>
        </Col>
      </Row>
      
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2 style={{ color: 'grey' }} className='mb-3'>Rock Classics</h2>
            <Row >
              <MusicSection artistName="queen" />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2 style={{ color: 'grey' }} className='mb-3'>Pop Culture</h2>
            <Row >
              <MusicSection artistName="katyperry" />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2 style={{ color: 'grey' }} className='mb-3'>#HipHop</h2>
            <Row >
              <MusicSection artistName="eminem" />
            </Row>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Main;