import getPokemon from '../services/pokedexApi';

const FETCH_POKEMON = 'FETCH_POKEMON';
const FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING';
const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

export const fetchPokemons = () => ({
  type: FETCH_POKEMON,
  pendingType: FETCH_POKEMON_LOADING,
  rejectedType: FETCH_POKEMON_ERROR,
  payload: getPokemon()
});

