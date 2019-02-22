import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { App } from '../client/components/App.jsx';
import { Banner } from '../client/components/Banner.jsx';
import { LandingPage } from '../client/components/LandingPage.jsx';


describe('<App />', () => {

  const app = shallow(<App />);
  
  it('renders', () => {
    expect(app).toHaveLength(1);
  });

});

describe('<Banner />', () => {

  const banner = shallow(<Banner />);
  
  it('renders', () => {
    expect(banner).toHaveLength(1);
  });

});

describe('<LandingPage />', () => {

  const landingPage = shallow(<LandingPage />);
  
  it('renders', () => {
    expect(landingPage).toHaveLength(1);
  });

});