import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Player from './components/Player';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Playlist from './components/Playlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search'; 
import ArtistTracks from './components/ArtistTracks';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-row h-100">
        <Sidebar className="sidebar" />
        <div className="content flex-grow-1">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/playlists" element={<Playlist />} />
            <Route path="/artist-tracks/:artistId" element={<ArtistTracks />} />
            <Route path="/search" element={<Search />} /> 
          </Routes>
        </div>
      </div>
      <Player />
    </BrowserRouter>
  );
};

export default App;