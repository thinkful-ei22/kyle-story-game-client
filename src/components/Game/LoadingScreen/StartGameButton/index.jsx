import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../../../actions/gameSession';

import Row from '../../../utils/grid/Row';
import Column from '../../../utils/grid/Column';

export class StartGameButton extends React.Component {
  
  onClick() {
    console.log('Player clicked `Start Game`');
    this.props.dispatch(startGame(this.props.roomCode));
  }

  render() {
    return (
      <Row>
        <Column columnWidth='col-6'>
          <button
            className='btn btn--start-game'
            onClick={() => this.onClick()}
          >
            Start Game
          </button>
        </Column>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  roomCode: state.gameSession.roomCode
});

export default connect(mapStateToProps)(StartGameButton);