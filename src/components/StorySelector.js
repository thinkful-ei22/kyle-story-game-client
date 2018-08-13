import React from 'react';
import { connect } from 'react-redux';

import { selectStory } from '../actions/gameSession';

export class StorySelector extends React.Component {

  onClick(e) {
    const storyId = e.target.dataset.id;
    this.props.dispatch(selectStory(storyId));
  }

  render() {
    const storyButtons = this.props.stories.map((story, index) => (
      <li key={story.id}>
        <button 
          data-id={story.id}
          onClick={(e) => this.onClick(e)}
        >
          Story #{index + 1}
        </button>
      </li>
    ));
    return (
      <ul className='storySelector'>
        {storyButtons}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.story.stories
});

export default connect(mapStateToProps)(StorySelector);