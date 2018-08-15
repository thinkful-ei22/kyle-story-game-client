import React from 'react';
import { shallow } from 'enzyme';

import PlayerReadyIndicator from '../PlayerReadyIndicator';

describe('<PlayerReadyIndicator />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PlayerReadyIndicator />);
  });
});