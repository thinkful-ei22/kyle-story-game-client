import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import { push } from 'react-router-redux';

import './joinGame.css';
import { roomCodeLength } from '../../../validators';
import Input from '../../utils/Input';
import { setRoomCode } from '../../../actions/gameSession';

export class JoinGame extends React.Component {

  onSubmit(values) {
    const roomCode = values.roomCode;
    console.log(roomCode);
    this.props.dispatch(setRoomCode(roomCode));
    this.props.dispatch(push(`/${roomCode}`));
  }

  /**
   * TODO:
   * needs to return an error about 'invalid room' 
   * if someone tries to join a game that doesn't exist on the server
   *   probably just need to implement something in the client to 
   *   handle 'JOIN_ROOM_ERROR' & 'JOIN_GAME_ERROR' from server
   * 
   */

  render() {
    return (
      <div className='container'>
        <form
          id='joinGame'
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <Field
            type='text'
            id='roomCode'
            name='roomCode'
            label='Room Code'
            placeholder='Enter a Room Code'
            element='input'
            component={Input}
            validate={[roomCodeLength]}
          />
          <button
            type='submit'
            className='btn btn--join-game'
            disabled={
              this.props.pristine ||
                this.props.submitting
            }
          >
            Join Game
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

// eslint-disable-next-line no-class-assign
JoinGame = reduxForm({
  form: 'joinGame',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(JoinGame);

export default connect(mapStateToProps)(JoinGame);