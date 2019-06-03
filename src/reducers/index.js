import { combineReducers } from 'redux';
import pokemons from './pokemonReducer';
import pokemonDetail from './pokemonDetailReducer';
import paging from './pagingReducer';

export default combineReducers({
  pokemons,
  pokemonDetail,
  paging
});
