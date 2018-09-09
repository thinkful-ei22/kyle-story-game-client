import React from 'react';
import { connect } from 'react-redux';

import './rulesModal.css';
import { toggleModal } from '../../../actions/gameSession';

export class RulesModal extends React.Component {

  onClick() {
    this.props.dispatch(toggleModal());
  }

  render() {
    const display = (this.props.showRules) ? 'overlay' : 'hidden';
    return (
      <div className={display} id="rulesModal">
        <div className="content">
          <h3>How to Play</h3>
          <div>
            <p><strong>What's the Story?</strong> is a hilarious multiplayer game that's a cross between <em>Mad Libs</em> and <em>Telephone</em> where players create stories together one sentence at a time.</p>
            <h4>The Twist</h4>
            <p>Each player can only see the latest sentence of the story!</p>
            <h4>Gameplay</h4>
            <ul>
              <li>Click <em>New Game</em> to generate a new Room Code</li>
              <li className='centered'>&mdash; OR &mdash;</li>
              <li>Enter an existing Room Code and click <em>Join Game</em></li>
              <li>Once all players have joined, click the <em>Start Game</em> button to, well... Start the Game!</li>
              <li>Each player will submit a sentence to start off their story.</li>
              <li>Each story is then passed to the next player.</li>
              <li>Play continues with each player adding a sentence to the story.</li>
              <li>The game ends when all stories reach 10 sentences.</li>
              <li>Players can then select and read all the stories created during the game.</li>
            </ul>
            <button
              className="btn close"
              onClick={() => this.onClick()}
            >
              Got It!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  showRules: state.gameSession.showRules
});

export default connect(mapStateToProps)(RulesModal);