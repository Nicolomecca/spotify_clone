import React from 'react';
import { useSelector } from 'react-redux';
import AlbumCard from './AlbumCard';

const ArtistTracks = () => {
  const artistTracks = useSelector((state) => state.search.results.data);

  return (
    <div className="container">
      <h2>Tracce dell'Artista</h2>
      <div className="row">
        {artistTracks && artistTracks.length > 0 ? (
          artistTracks.map((song, index) => (
            <AlbumCard key={index} singleSong={song} />
          ))
        ) : (
          <p>Nessuna traccia trovata per questo artista.</p>
        )}
      </div>
    </div>
  );
};

export default ArtistTracks;