import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

function PokeDeck({ pokemons }) {
  if(!pokemons) return <h1>Error!</h1>;

  const pokeList = pokemons.map(pokemon => {
    const color = pokemon.color_1;
    return (
      <li key={pokemon._id} style={{
        'listStyleType': 'none',
        'margin': '5px',
        'border': '1px solid black',
        'border-radius': '10px',
        'background-color': color
      }}>
        <Pokemon pokemon={pokemon} styles={{ 'width': '80%' }}/>
      </li>
    );
  });

  return (
    <ul style={{ 
      'display': 'flex',
      'flexWrap' : 'wrap'
    }}>
      {pokeList}
    </ul>
  );
}

PokeDeck.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    pokemon: PropTypes.string.isRequired,
    color_1: PropTypes.string.isRequired,
    color_2: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }))
};

export default PokeDeck;
