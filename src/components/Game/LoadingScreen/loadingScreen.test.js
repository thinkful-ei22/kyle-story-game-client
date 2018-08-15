/* global jest */
import React from 'react';
import { shallow } from 'enzyme';

import { LoadingScreen } from '../LoadingScreen';

describe('<LoadingScreen />', () => {
  it('should render without crashing', () => {
    const dispatch = jest.fn();
    const props = {dispatch};
    const wrapper = shallow(<LoadingScreen {...props} />);
  });
});