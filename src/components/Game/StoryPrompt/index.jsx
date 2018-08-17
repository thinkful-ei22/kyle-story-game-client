import React from 'react';
import {connect} from 'react-redux';

import './storyPrompt.css';

export function StoryPrompt(props) {
  return (
    <section className="card storyPrompt">
      <p><span className='prompt'>Prompt:</span> {props.upcomingPrompt}</p>
    </section>
  );
}

const mapStateToProps = state => {
  const upcoming = state.story.upcoming[0];
  const prompt = upcoming
    ? upcoming.prompt
    : 'Waiting for a story...';
  return {
    upcomingPrompt: prompt
  };};

export default connect(mapStateToProps)(StoryPrompt);