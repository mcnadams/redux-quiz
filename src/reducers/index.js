import { combineReducers } from 'redux';
import pokemons from './pokemonReducer';
import pokemonDetail from './pokemonDetailReducer';

export default combineReducers({
  pokemons,
  pokemonDetail
});
