import React from 'react';
import { connect } from 'react-redux';

import './completionScreen.css';
import StorySelector from './StorySelector';
import StoryDisplay from './StoryDisplay';
import StartOverButton from './StartOverButton';

export function CompletionScreen(props) {
  return (
    <section className='completionScreen'>
      <h2 className='completedGame'>Game Completed</h2>
      <StorySelector />
      <StoryDisplay />
      <StartOverButton />
    </section>
  );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CompletionScreen);