import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Player from './components/Player';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <div className="d-flex flex-grow-1">
          <Sidebar/>
          <Main/>
        </div>
        <Player/>
      </div>
    </BrowserRouter>
  );
};

export default App;