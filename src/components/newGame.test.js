/* global jest */
import React from 'react';
import { shallow } from 'enzyme';

import {NewGame} from './NewGame';

describe('<NewGame />', () => {
  it('Should render without crashing', () => {
    const dispatch = jest.fn();
    const props = {dispatch};
    const wrapper = shallow(
      <NewGame {...props}/>
    );
  });
});