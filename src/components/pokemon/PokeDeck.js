import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

function PokeDeck({ pokemons }) {
  if(!pokemons) return <h1>Error!</h1>;

  const pokeList = pokemons.map(pokemon => {
    return (
      <li key={pokemon._id}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });

  return (
    <ul>
      {pokeList}
    </ul>
  );
}

PokeDeck.propTypes = {
  pokemons: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    pokemon: PropTypes.string.isRequired,
    color_1: PropTypes.string.isRequired,
    color_2: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  })
};

export default PokeDeck;
