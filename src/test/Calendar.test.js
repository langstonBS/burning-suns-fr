import React from 'react';
import { shallow } from 'enzyme';
import Calendar  from '../Calendar'


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Calendar />);
      expect(wrapper).toMatchSnapshot()
     });
 });
 