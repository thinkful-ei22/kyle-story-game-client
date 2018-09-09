import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from '../TopNav';

describe('<TopNav />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<TopNav />);
  });
});