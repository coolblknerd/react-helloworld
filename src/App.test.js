import React from 'react';
import App from './App';
import {shallow} from 'enzyme'

// Shallow rendering is used for isolated unit tests
it('renders without crashing', () => {
  shallow(<App />)
});