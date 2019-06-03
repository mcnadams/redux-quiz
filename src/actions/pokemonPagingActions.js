import { getPokemonPaging } from '../services/pokedexApi';

export const FETCH_PAGING = 'FETCH_PAGING';
export const FETCH_PAGING_LOADING = 'FETCH_PAGING_LOADING';
export const FETCH_PAGING_ERROR = 'FETCH_PAGING_ERROR';

export const fetchPages = () => ({
  type: FETCH_PAGING,
  pendingType: FETCH_PAGING_LOADING,
  rejectedType: FETCH_PAGING_ERROR,
  payload: getPokemonPaging()
});
