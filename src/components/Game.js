import React from 'react';
import { connect } from 'react-redux';

import StoryPrompt from './StoryPrompt.js';
import StoryInput from './StoryInput.js';
import { serverHello } from '../actions/sentence';

export class Game extends React.Component {

  componentDidMount() {
    console.log('Game component mounted');
    this.props.dispatch(serverHello());
  }

  render() {
    return (
      <div className="Game">
        <h1>What's the Story?</h1>
        <h2>This is the Game component</h2>
        <h2>{this.props.playerName}</h2>
        <StoryPrompt />
        <StoryInput />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerName: state.player.name,
  clientMessage: state.handshake.clientMessage,
  serverMessage: state.handshake.serverMessage
});

export default connect(mapStateToProps)(Game);
