import {
  FETCH_POKEMON,
  FETCH_POKEMON_LOADING,
  FETCH_POKEMON_ERROR
} from '../actions/pokemonsActions';

const initialState = {
  loading: false,
  pokemon: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return { ...state, error: null, loading: false, pokemon: action.payload };
    case FETCH_POKEMON_LOADING:
      return { ...state, loading: true };
    case FETCH_POKEMON_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
