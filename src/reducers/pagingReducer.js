import {
  FETCH_PAGING,
  FETCH_PAGING_LOADING,
  FETCH_PAGING_ERROR
} from '../actions/pokemonPagingActions';

const initialState = {
  loading: false,
  pages: 1,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PAGING:
      return { ...state, error: null, loading: false, pages: action.payload };
    case FETCH_PAGING_LOADING:
      return { ...state, loading: true };
    case FETCH_PAGING_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
