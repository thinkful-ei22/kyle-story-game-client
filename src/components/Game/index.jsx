import React from 'react';
import { connect } from 'react-redux';

import StoryPrompt from './StoryPrompt';
import StoryInput from './StoryInput';
import LoadingScreen from './LoadingScreen';
import CompletionScreen from './CompletionScreen';
import { serverJoinRoom, storePlayerName, addPlayerNameToStoryState, loadPlayerName } from '../../actions/gameSession';

export class Game extends React.Component {

  componentWillMount() {
    console.log('roomCode: ', this.props.roomCode);
    console.log('playerName: ', this.props.playerName);
    this.props.dispatch(loadPlayerName());
    this.props.dispatch(addPlayerNameToStoryState(this.props.playerName));
    this.props.dispatch(serverJoinRoom(this.props.roomCode, this.props.playerName));
  }

  componentWillUnmount() {
    this.props.dispatch(storePlayerName(this.props.playerName));
  }

  render() {

    if (!this.props.gameStarted) {
      return (
        <LoadingScreen />
      );
    }

    if (this.props.gameCompleted) {
      return (
        <CompletionScreen />
      );
    }

    return (
      <div className="Game">
        <h2>This is the Game component</h2>
        <h2>{this.props.playerName}</h2>
        <StoryPrompt />
        <StoryInput />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameStarted: state.gameSession.started,
  gameCompleted: state.gameSession.completed,
  playerName: state.player.name,
  roomCode: state.gameSession.roomCode || state.router.location.pathname.slice(1)
});

export default connect(mapStateToProps)(Game);
