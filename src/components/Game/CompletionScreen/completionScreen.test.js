import React from 'react';
import { shallow } from 'enzyme';

import { CompletionScreen } from '../CompletionScreen';

describe('<CompletionScreen />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CompletionScreen />);
  });
});