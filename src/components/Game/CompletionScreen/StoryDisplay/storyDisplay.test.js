import React from 'react';
import { shallow } from 'enzyme';

import { StoryDisplay } from '../StoryDisplay';

describe('<StoryDisplay />', () => {
  it('should render without crashing', () => {
    const props = {
      selectedStory: {
        sentences: [
          {id: 1, text:'foo'},
          {id: 2, text:'bar'},
          {id: 3, text:'baz'} 
        ]
      }
    };
    const wrapper = shallow(<StoryDisplay {...props} />);
  });
});