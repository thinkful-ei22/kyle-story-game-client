import React from 'react';
import { shallow } from 'enzyme';

import Rules from '../Rules';

describe('<Rules />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Rules />);
  });
});
