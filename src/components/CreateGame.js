import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, focus } from 'redux-form';

import './createGame.css';
import Row from './Row';
import Column from './Column';
import {createNewGame} from '../actions/gameSession';

export class CreateGame extends React.Component {

  onSubmit(values = {}) {
    values.playerName = this.props.playerName;
    this.props.dispatch(createNewGame(values));
  }

  render() {
    let loading;
    if (this.props.loading) {
      loading = <h3>LOADING...</h3>;
    }

    return (
      <div className='container'>
        <Row>
          <Column columnWidth='col-6'>
            {loading}
          </Column>
        </Row>
        <form
          id='createGame'
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <Row>
            <Column columnWidth='col-3'>
              <button
                type='submit'
                className='btn btn--create-game'
                disabled={
                  this.props.submitting ||
              this.props.loading
                }>
                New Game
              </button>
            </Column>
          </Row>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerName: state.player.name,
  loading: state.gameSession.loading
});

// eslint-disable-next-line no-class-assign
CreateGame = reduxForm({
  form: 'createGame',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(CreateGame);

export default connect(mapStateToProps)(CreateGame);