import React from 'react';
import { connect } from 'react-redux';

import './game.css';
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
    let contents = (
      <React.Fragment>
        <StoryPrompt />
        <StoryInput />
      </React.Fragment>
    );

    if (!this.props.gameStarted) {
      contents = (
        <LoadingScreen />
      );
    }

    if (this.props.gameCompleted) {
      contents = (
        <CompletionScreen />
      );
    }

    return (
      <div className='gameContainer'>
        <section className="Game">
          <h2 className='playerName'><span>name: </span>{this.props.playerName}</h2>
          {contents}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameStarted: state.gameSession.started,
  gameCompleted: state.gameSession.completed,
  playerName: state.player.name,
  roomCode: state.gameSession.roomCode || state.router.location.pathname.slice(1),
  error: state.gameSession.error || state.story.error
});

export default connect(mapStateToProps)(Game);
