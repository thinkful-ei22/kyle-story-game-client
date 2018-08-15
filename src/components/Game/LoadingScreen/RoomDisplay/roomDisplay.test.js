import React from 'react';
import { shallow } from 'enzyme';

import { RoomDisplay } from '../RoomDisplay';

describe('<RoomDisplay />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<RoomDisplay />);
  });
});