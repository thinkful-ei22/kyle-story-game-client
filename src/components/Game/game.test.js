/* global jest */
import React from 'react';
import { shallow } from 'enzyme';

import { Game } from '../Game';

describe('<Game />', () => {
  it('should render without crashing', () => {
    const dispatch = jest.fn();
    const props = {dispatch};
    const wrapper = shallow(<Game {...props} />);
  });
});