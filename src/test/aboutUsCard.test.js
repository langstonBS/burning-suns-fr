import React from 'react';
import { shallow } from 'enzyme';
import Test from '../aboutUsCard';
import kPhoto from '../kigers.jpg';


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Test name={'me'}
        alt={'space the finial frontear'}
        photo={kPhoto}
        detail={`Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna
         aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac. Lorem mollis aliquam ut porttitor
          leo a diam sollicitudin tempor. Vitae congue mauris
           rhoncus aenean vel elit scelerisque mauris. Leo duis u
           t diam quam. Vitae nunc sed velit dignissim sodales ut
           eu sem. A pellentesque sit amet porttitor eget dolor morbi
            non.`} />);
      expect(wrapper).toMatchSnapshot()
     });
 });