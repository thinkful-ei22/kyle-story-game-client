import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './startOverButton.css';

export class StartOverButton extends React.Component {

  onClick() {
    this.props.dispatch(push('/'));
  }

  render() {
    return (
      <div className='startOver'>
        <button
          className='btn btn--start-over'
          onClick={() => this.onClick()}
        >
        Play Again
        </button>
      </div>
    );
  }
}

export default connect()(StartOverButton);