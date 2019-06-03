import { combineReducers } from 'redux';
import pokemons from './pokemonReducer';
import pokemonDetail from './pokemonDetailReducer';
import paging from './pagingReducer';
import comments from './commentReducer';

export default combineReducers({
  pokemons,
  pokemonDetail,
  paging,
  comments
});
