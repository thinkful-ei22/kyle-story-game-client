import React from 'react';
import { shallow } from 'enzyme';

import { StorySelector } from '../StorySelector';

describe('<StorySelector />', () => {
  it('should render without crashing', () => {
    const props = {
      stories: [ {id: 1}, {id: 2}, {id: 3} ]
    };
    const wrapper = shallow(<StorySelector {...props} />);
  });
});