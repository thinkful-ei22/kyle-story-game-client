import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import './storyInput.css';
import { minLength } from '../../../validators';
import Input from '../../utils/Input';
import {serverAddSentence, nextPrompt} from '../../../actions/sentence';

export class StoryInput extends React.Component {
  onSubmit(values) {
    values.author = this.props.playerName;
    values.storyId = this.props.upcoming.storyId;
    values.roomCode = this.props.roomCode;
    this.props.dispatch(serverAddSentence(values));
    this.props.dispatch(nextPrompt());
    this.props.reset();
  }

  render() {

    // disable/hide input section if the prompt is the 'waiting' message
    if (!this.props.upcoming) {
      return (
        <div></div>
      );
    }

    return (
      <form
        id='storyInput'
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <Field
          type='text'
          id='sentence'
          name='sentence'
          label='Continue the story :'
          element='textarea'
          component={Input}
          validate={[minLength]}
        />
        <button
          type='submit'
          className='btn btn--add-sentence'
          disabled={
            this.props.pristine ||
            this.props.submitting
          }>
          Send
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  playerName: state.player.name,
  upcoming: state.story.upcoming[0],
  roomCode: state.gameSession.roomCode
});

// eslint-disable-next-line no-class-assign
StoryInput = reduxForm({
  form: 'storyInput'
})(StoryInput);

export default connect(mapStateToProps)(StoryInput);