import React from 'react';
import { shallow } from 'enzyme';

import { StoryPrompt } from '../StoryPrompt';

describe('<StoryPrompt />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<StoryPrompt />);
  });
});