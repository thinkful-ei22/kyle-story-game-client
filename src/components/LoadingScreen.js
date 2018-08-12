import React from 'react';

import RoomDisplay from './RoomDisplay';
import PlayersLoadingList from './PlayersLoadingList';
import StartGameButton from './StartGameButton';

export default function LoadingScreen() {
  return (
    <div className='loadingScreen'>
      <h2>LOADING...</h2>
      <RoomDisplay />
      <PlayersLoadingList />
      <StartGameButton />
    </div>
  );
}