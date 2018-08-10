import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import Input from './Input';
import {serverAddSentence, nextPrompt} from '../actions/sentence';

export class StoryInput extends React.Component {
  onSubmit(values) {
    values.author = this.props.playerName;
    values.storyId = this.props.currentStory.id;
    this.props.dispatch(serverAddSentence(values));
    this.props.dispatch(nextPrompt());
    this.props.reset();
  }

  render() {

    // TODO disable/hide input section if the prompt is the 'waiting' message
    if (!this.props.currentStory) {
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
          label='Continue the story'
          element='input'
          component={Input}
          /* TODO: validate={[length]} */
        />
        <button
          type='submit'
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
  currentStory: state.story.currentStory[0]
});

// eslint-disable-next-line no-class-assign
StoryInput = reduxForm({
  form: 'storyInput',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(StoryInput);

export default connect(mapStateToProps)(StoryInput);