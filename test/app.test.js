import React from 'react';
import {mount} from 'enzyme';
import App from '../src/js/components/App.jsx';
import appStore from '../src/js/stores/appStore';

describe('App', () => {
  
  it('mounts', () => {
    const wrapper = mount(<App appStore={appStore}/>);
    expect(wrapper.find('#app')).to.exist;
  })
  
});