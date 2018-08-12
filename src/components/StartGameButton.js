import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/gameSession';

export class StartGameButton extends React.Component {
  
  onClick() {
    console.log('Player clicked `Start Game`');
    this.props.dispatch(startGame(this.props.roomCode));
  }

  render() {
    return (
      <button
        className='start'
        onClick={() => this.onClick()}
      >
        Start Game
      </button>
    );
  }
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode
});

export default connect(mapStateToProps)(StartGameButton);