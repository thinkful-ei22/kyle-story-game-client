import React from 'react';
import {connect} from 'react-redux';

export class StoryPrompt extends React.Component {

  render() {

    // const sentences = this.props.currentStory.sentences.map((sentence, index) => <li key={index}>{sentence.text}</li>);
    return (
      <section className="storyPrompt">
        <p>{this.props.incomingPrompt}</p>
        {/* <p>Id: {this.props.currentStory.id}</p>
        <p>Creator: {this.props.currentStory.creator}</p>
        <p>sentences: </p>
        <ul>
          {sentences}
        </ul> */}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const currentStory = state.story.currentStory[0];
  const sentences = currentStory
    ? state.story.currentStory[0].sentences
    : [{text: 'Waiting for the next player...'}];
  return {
    currentStory: state.story.currentStory[0],
    incomingPrompt: sentences[sentences.length - 1].text,
    stories: state.story.stories
  };};

export default connect(mapStateToProps)(StoryPrompt);