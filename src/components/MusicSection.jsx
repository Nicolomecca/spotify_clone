import React, { useState } from 'react';
import { useEffect } from 'react';
import AlbumCard from './AlbumCard';

const MusicSection = ({ artistName }) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetchSongs();
  }, [artistName]);

  const fetchSongs = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error in fetching songs');
        }
      })
      .then(data => {
        setSongs(data.data.slice(0, 4));
      })
      .catch(err => {
        console.log('error', err);
      });
  };

 

  return (
    <div className="row">
      {songs.map((song, index) => (
        <AlbumCard key={index} singleSong={song} />
      ))}
    </div>
  );
};

export default MusicSection;