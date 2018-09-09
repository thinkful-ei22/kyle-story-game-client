import React from 'react';
import { shallow } from 'enzyme';

import { RulesModal } from '../RulesModal';

describe('<RulesModal />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<RulesModal />);
  });
});