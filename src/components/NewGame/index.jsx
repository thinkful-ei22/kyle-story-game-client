import React from 'react';
import { connect } from 'react-redux';

import './newGame.css';
import JoinGame from './JoinGame';
import CreateGame from './CreateGame';

import { refreshPlayerName } from '../../actions/gameSession';

export class NewGame extends React.Component {

  componentWillMount() {
    this.props.dispatch(refreshPlayerName());
  }

  render() {
    return (
      <div className='newGameContainer'>
        <div className='newGame'>
          <JoinGame />
          <CreateGame />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerName: state.player.name
});

export default connect(mapStateToProps)(NewGame);