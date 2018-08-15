import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('<Input />', () => {
  it('should render without crashing', () => {
    const props = {
      meta: { touched: false },
      input: { name: 'foo' }
    };
    const wrapper = shallow(<Input {...props} />);
  });
});