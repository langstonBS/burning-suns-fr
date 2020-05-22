import React from 'react';
import { shallow } from 'enzyme';
import Test from '../Notes';


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Test />);
      expect(wrapper).toMatchSnapshot()
     });
 });