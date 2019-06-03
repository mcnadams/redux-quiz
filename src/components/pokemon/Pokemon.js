import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pokemon({ pokemon }) {
  return (
    <Link to={`/${pokemon._id}`}>
      <img src={pokemon.url_image}/>
      <p>{pokemon.pokemon}</p>
    </Link>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    pokemon: PropTypes.string.isRequired,
    color_1: PropTypes.string.isRequired,
    color_2: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  })
};

export default Pokemon;
