import React from 'react';
import { connect } from 'react-redux';

import './storySelector.css';
import { selectStory } from '../../../../actions/gameSession';

export class StorySelector extends React.Component {

  onClick(e) {
    const storyId = e.target.dataset.id;
    this.props.dispatch(selectStory(storyId));
  }

  render() {
    const storyButtons = this.props.stories.map((story, index) => (
      <li key={story.id}>
        <button
          className='btn btn--story-selector'
          data-id={story.id}
          onClick={(e) => this.onClick(e)}
        >
          #{index + 1}
        </button>
      </li>
    ));
    return (
      <div className='storySelector clearfix'>
        <span>Story :</span>
        <ul>
          {storyButtons}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.story.stories
});

export default connect(mapStateToProps)(StorySelector);