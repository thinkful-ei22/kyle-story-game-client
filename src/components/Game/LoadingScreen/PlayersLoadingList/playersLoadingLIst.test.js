import React from 'react';
import { shallow } from 'enzyme';

import { PlayersLoadingList } from '../PlayersLoadingList';

describe('<PlayersLoadingList />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PlayersLoadingList />);
  });
});