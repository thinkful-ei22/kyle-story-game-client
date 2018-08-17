import React from 'react';
import { connect } from 'react-redux';

import './storyDisplay.css';
import Sentence from './Sentence';

export function StoryDisplay(props) {

  const storySentences = props.selectedStory.sentences.map(sentence => (
    <li key={sentence.id} className='card'>
      <Sentence id={sentence.id} text={sentence.text} />
    </li>
  ));
  return (
    <section className='storyDisplay'>
      <p><span className='startedBy'>Started by :</span> {props.selectedStory.creator}</p>
      <ul className='story'>
        {storySentences}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  selectedStory: state.story.stories.find(story => story.id === state.story.selectedStoryId)
});

export default connect(mapStateToProps)(StoryDisplay); 