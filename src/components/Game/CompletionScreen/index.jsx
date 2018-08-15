import React from 'react';
import { connect } from 'react-redux';

import StorySelector from './StorySelector';
import StoryDisplay from './StoryDisplay';

export function CompletionScreen(props) {
  return (
    <div>
      <h2>GAME COMPLETED</h2>
      <StorySelector />
      <StoryDisplay />
    </div>
  );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CompletionScreen);