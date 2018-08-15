import React from 'react';
import { shallow } from 'enzyme';

import Sentence from '../Sentence';

describe('<Sentence />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Sentence />);
  });
});