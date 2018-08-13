import React from 'react';
import { connect } from 'react-redux';

import RoomDisplay from './RoomDisplay';
import PlayersLoadingList from './PlayersLoadingList';
import StartGameButton from './StartGameButton';
import { serverJoinGame } from '../actions/gameSession';

export class LoadingScreen extends React.Component {

  componentWillMount() {
    this.props.dispatch(serverJoinGame(this.props.roomCode, this.props.playerName));
  }

  render() {
    return (
      <div className='loadingScreen'>
        <h2>LOADING...</h2>
        <RoomDisplay />
        <PlayersLoadingList />
        <StartGameButton />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode || state.router.location.pathname.slice(1),
  playerName: state.player.name
});

export default connect(mapStateToProps)(LoadingScreen);