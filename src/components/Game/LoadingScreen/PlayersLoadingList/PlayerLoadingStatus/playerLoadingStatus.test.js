import React from 'react';
import { shallow } from 'enzyme';

import PlayerLoadingStatus from '../PlayerLoadingStatus';

describe('<PlayerLoadingStatus />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PlayerLoadingStatus />);
  });
});