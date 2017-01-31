import React from 'react';
import {mount} from 'enzyme';
import Authenticate from '../src/js/components/Authenticate.jsx';

describe ('Authenticate', () => {
  
  it('mounts', () => {
    const wrapper = mount(<Authenticate />);
    expect(wrapper.find('#authenticate')).to.exist;
  })
  
});