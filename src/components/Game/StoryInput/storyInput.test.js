import React from 'react';
import { shallow } from 'enzyme';

import { StoryInput } from '../StoryInput';

describe('<StoryInput />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<StoryInput />);
  });
});