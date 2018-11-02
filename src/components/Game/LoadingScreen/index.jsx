import React from 'react';
import { connect } from 'react-redux';

import './loadingScreen.css';
import RoomDisplay from './RoomDisplay';
import PlayersLoadingList from './PlayersLoadingList';
import StartGameButton from './StartGameButton';
import { serverJoinGame } from '../../../actions/gameSession';

export class LoadingScreen extends React.Component {

  componentWillMount() {
    this.props.dispatch(serverJoinGame(this.props.roomCode, this.props.playerName));
  }

  // TODO: need to remove player from the game and list 
  //   when they navigate away from the loading page.
  //   probably done in a `component(Will/Did)Unmount`?

  render() {
    if (this.props.error) {
      return (
        <div className='error'>
          {this.props.error}
        </div>
      );
    } else {
      return (
        <section className='loadingScreen'>
          <RoomDisplay />
          <PlayersLoadingList />
          <h3 className='waitingMessage'>Waiting for more players...</h3>
          <StartGameButton />
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode || state.router.location.pathname.slice(1),
  playerName: state.player.name,
  error: state.gameSession.error
});

export default connect(mapStateToProps)(LoadingScreen);