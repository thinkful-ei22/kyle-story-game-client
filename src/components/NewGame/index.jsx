import React from 'react';
import { connect } from 'react-redux';

import './newGame.css';
import JoinGame from './JoinGame';
import CreateGame from './CreateGame';
import Rules from './Rules';

import { refreshPlayerName } from '../../actions/gameSession';

export class NewGame extends React.Component {

  componentWillMount() {
    this.props.dispatch(refreshPlayerName());
  }

  render() {
    return (
      <div className='newGameContainer'>
        <section className='newGame'>
          <JoinGame />
          <CreateGame />
          <Rules />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerName: state.player.name
});

export default connect(mapStateToProps)(NewGame);