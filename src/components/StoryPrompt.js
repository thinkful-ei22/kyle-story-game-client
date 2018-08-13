import React from 'react';
import {connect} from 'react-redux';

export function StoryPrompt(props) {
  return (
    <section className="storyPrompt">
      <p>{props.upcomingPrompt}</p>
    </section>
  );
}

const mapStateToProps = state => {
  const upcoming = state.story.upcoming[0];
  const prompt = upcoming
    ? upcoming.prompt
    : 'Waiting for the next player...';
  return {
    upcomingPrompt: prompt
  };};

export default connect(mapStateToProps)(StoryPrompt);