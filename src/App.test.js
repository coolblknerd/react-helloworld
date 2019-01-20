import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

// Shallow rendering is used for isolated unit tests
describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(
      <App />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render button that says "Click Me"', () => {
    const output = shallow(
      <App />
    );
    expect(output.find('button').text()).toEqual('Click Me');
  });

  // Really want to know how to test event
});

