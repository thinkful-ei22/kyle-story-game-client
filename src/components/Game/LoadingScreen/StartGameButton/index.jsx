import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../../../actions/gameSession';

import './startGameButton.css';

export class StartGameButton extends React.Component {
  
  onClick() {
    console.log('Player clicked `Start Game`');
    this.props.dispatch(startGame(this.props.roomCode));
  }

  render() {
    return (
      <div className='start-container'>
        <button
          className='btn btn--start-game'
          onClick={() => this.onClick()}
        >
            Start Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode
});

export default connect(mapStateToProps)(StartGameButton);