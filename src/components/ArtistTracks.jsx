import { useSelector } from 'react-redux';
import AlbumCard from './AlbumCard';
import { Row, Col } from 'react-bootstrap';

const ArtistTracks = () => {
  const artistTracks = useSelector((state) => state.search.results.data);

  return (
<Row className='sidebarMargins'>
  <Col xs={10}>  
    <h2 className='text-white mb-4 mt-3'>Tracce dell'Artista</h2>
    <Row>
      {artistTracks && artistTracks.length > 0 ? (
        artistTracks.map((song, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <AlbumCard singleSong={song} />
          </Col>
        ))
      ) : (
        <p>Nessuna traccia trovata per questo artista.</p>
      )}
    </Row>
  </Col>
</Row>
  )
};

export default ArtistTracks;