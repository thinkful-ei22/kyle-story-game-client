import React from 'react';
import { shallow } from 'enzyme';

import Row from '../Row';

describe('<Row />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Row />);
  });
});