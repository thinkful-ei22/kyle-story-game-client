import React from 'react';

import JoinGame from './JoinGame';
import CreateGame from './CreateGame';

export default function NewGame() {

  return (
    <div className='newGame'>
      <h2>This is the NewGame component</h2>
      <JoinGame />
      <CreateGame />
    </div>
  );
}
