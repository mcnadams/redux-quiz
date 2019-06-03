import { getPokemonDetail } from '../services/pokedexApi';

export const FETCH_POKEMON_DETAIL = 'FETCH_POKEMON_DETAIL';
export const FETCH_POKEMON_DETAIL_LOADING = 'FETCH_POKEMON_DETAIL_LOADING';
export const FETCH_POKEMON_DETAIL_ERROR = 'FETCH_POKEMON_DETAIL_ERROR';

export const fetchPokemonDetail = id => ({
  type: FETCH_POKEMON_DETAIL,
  pendingType: FETCH_POKEMON_DETAIL_LOADING,
  rejectedType: FETCH_POKEMON_DETAIL_ERROR,
  payload: getPokemonDetail(id)
});
