import { shallow } from 'enzyme';
import React from 'react';
import Pokemon from './Pokemon';

describe('Pokemon component', () => {
  it('renders Pokemon', () => {
    const wrapper = shallow(<Pokemon pokemon={{
      _id: '2',
      pokemon: 'bob',
      color_1: '#f0987f',
      color_2: 'NA',
      url_image: '/path',
    }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
