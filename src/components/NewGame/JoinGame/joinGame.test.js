import React from 'react';
import { shallow } from 'enzyme';

import { JoinGame } from '../JoinGame';

describe('<JoinGame />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<JoinGame />);
  });
});