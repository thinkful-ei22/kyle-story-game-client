import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import Input from './Input';
import { push } from 'react-router-redux';
import { setRoomCode } from '../actions/gameSession';

export class JoinGame extends React.Component {

  onSubmit(values) {
    const roomCode = values.roomCode;
    console.log(roomCode);
    this.props.dispatch(setRoomCode(roomCode));
    this.props.dispatch(push(`/${roomCode}`));
  }

  render() {
    return (
      <form
        id='joinGame'
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <Field
          type='text'
          id='roomCode'
          name='roomCode'
          label='Enter Game Code to Join:'
          element='input'
          component={Input}
          /* TODO: validate={[length]} */
        />
        <button
          type='submit'
          className='btn'
          disabled={
            this.props.pristine ||
            this.props.submitting
          }>
          Join Game
        </button>
      </form>
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