import React from 'react';
import { connect } from 'react-redux';

import PlayerLoadingStatus from './PlayerLoadingStatus';

export function PlayersLoadingList(props) {

  const players = props.players.map(player => {
    return (
      <PlayerLoadingStatus
        name={player.name} 
        readyState={player.readyState}
        key={player.id}
        id={player.id}
      />
    );
  });

  return (
    <ul className='playersLoadingList'>
      {players}
    </ul>
  );
}

const mapStateToProps = state => ({
  players: state.gameSession.players
});

export default connect(mapStateToProps)(PlayersLoadingList);