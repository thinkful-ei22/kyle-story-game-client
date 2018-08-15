import React from 'react';
import { shallow } from 'enzyme';

import Column from '../Column';

describe('<Column />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Column />);
  });
});