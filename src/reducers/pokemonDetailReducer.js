import {
  FETCH_POKEMON_DETAIL,
  FETCH_POKEMON_DETAIL_LOADING,
  FETCH_POKEMON_DETAIL_ERROR
} from '../actions/pokemonDetailActions';

const initialState = {
  pokemon: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case FETCH_POKEMON_DETAIL:
      return { ...initialState, pokemon: action.payload, loading: false };
    case FETCH_POKEMON_DETAIL_LOADING:
      return { ...state, loading: true };
    case FETCH_POKEMON_DETAIL_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
