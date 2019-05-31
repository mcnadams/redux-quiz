import getPokemon from '../services/pokedexApi';

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

export const fetchPokemons = (page) => ({
  type: FETCH_POKEMON,
  pendingType: FETCH_POKEMON_LOADING,
  rejectedType: FETCH_POKEMON_ERROR,
  payload: getPokemon(page)
});

