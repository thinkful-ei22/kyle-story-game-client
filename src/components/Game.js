import React from 'react';
import { connect } from 'react-redux';

import StoryPrompt from './StoryPrompt.js';
import StoryInput from './StoryInput.js';
import LoadingScreen from './LoadingScreen';
import { serverHello } from '../actions/sentence';
import { serverJoinRoom, addPlayerNameToStoryState } from '../actions/gameSession';

export class Game extends React.Component {

  componentWillMount() {
    console.log('roomCode: ', this.props.roomCode);
    console.log('playerName: ', this.props.playerName);
    this.props.dispatch(addPlayerNameToStoryState(this.props.playerName));
    this.props.dispatch(serverJoinRoom(this.props.roomCode, this.props.playerName));
  }

  componentDidMount() {
    console.log('Game component mounted');
    this.props.dispatch(serverHello());
  }

  render() {

    if (!this.props.gameStarted) {
      return (
        <LoadingScreen />
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
  roomCode: state.gameSession.roomCode,
  clientMessage: state.handshake.clientMessage,
  serverMessage: state.handshake.serverMessage
});

export default connect(mapStateToProps)(Game);
