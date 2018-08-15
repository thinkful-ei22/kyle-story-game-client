import React from 'react';
import { connect } from 'react-redux';

import Sentence from './Sentence';

export function StoryDisplay(props) {

  const storySentences = props.selectedStory.sentences.map(sentence => (
    <li key={sentence.id}>
      <Sentence id={sentence.id} text={sentence.text} />
    </li>
  ));
  return (
    <section>
      <p>Started by: {props.selectedStory.creator}</p>
      <ul>
        {storySentences}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  selectedStory: state.story.stories.find(story => story.id === state.story.selectedStoryId)
});

export default connect(mapStateToProps)(StoryDisplay); 