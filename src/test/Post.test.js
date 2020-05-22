import React from 'react';
import { shallow } from 'enzyme';
import Post from '../Post';

const note = {tite: 'my name', date: 'adate'}
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Post post={note}/>);
      expect(wrapper).toMatchSnapshot()
     });
 });