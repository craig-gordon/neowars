import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { LandingPage } from '../client/components/LandingPage.jsx';


describe('<LandingPage />', () => {

  const landingPage = shallow(<LandingPage />);
  
  it('renders', () => {
    expect(landingPage).toHaveLength(1);
  });

});