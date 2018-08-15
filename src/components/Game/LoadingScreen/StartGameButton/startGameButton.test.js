import React from 'react';
import { shallow } from 'enzyme';

import { StartGameButton } from '../StartGameButton';

describe('<StartGameButton />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<StartGameButton />);
  });
});