import React from 'react';
import { connect } from 'react-redux';

import './playersLoadingList.css';
import PlayerLoadingStatus from './PlayerLoadingStatus';

export class PlayersLoadingList extends React.Component {

  render() {
    if (!this.props.players) {
      return (<div>Players loading...</div>);
    }
  
    const players = this.props.players.map(player => {
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
}

const mapStateToProps = state => ({
  players: state.gameSession.players
});

export default connect(mapStateToProps)(PlayersLoadingList);