import React from 'react';
import { shallow } from 'enzyme';

import { CreateGame } from '../CreateGame';

describe('<CreateGame />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CreateGame />);
  });
});