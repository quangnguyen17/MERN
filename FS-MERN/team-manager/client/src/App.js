import React from 'react';
import AddPlayer from './components/AddPlayer';
import PlayersList from './components/PlayersList';
import MainHeading from './components/MainHeading';
import PlayerStatus from './components/PlayerStatus';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div className="App">
      <MainHeading />
      <Router>
        <PlayersList path="/" />
        <PlayersList path="/players/list" />
        <AddPlayer path="/players/addplayer" />
        <PlayerStatus path="/status/game/1" />
      </Router>
    </div>
  );
}