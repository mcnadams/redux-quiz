import { shallow } from 'enzyme';
import React from 'react';
import PokeDeck from './PokeDeck';

describe('PokeDeck component', () => {
  it('renders PokeDeck', () => {
    const wrapper = shallow(<PokeDeck pokemons={[{
      _id: '2',
      pokemon: 'bob',
      color_1: '#f0987f',
      color_2: 'NA',
      url_image: '/path',
    }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
