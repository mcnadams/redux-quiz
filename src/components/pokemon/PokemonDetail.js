import React from 'react';
import PropTypes from 'prop-types';

function PokemonDetail({ pokemon }) {
  return (
    <section>
      <h1>{pokemon.pokemon}</h1>
      <img src={pokemon.url_image} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
    </section>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({
    pokemon: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    base_experience: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired
  })
};

export default PokemonDetail;
