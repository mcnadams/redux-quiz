import { CREATE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.id]: [
          ...(state[action.payload.id] || []),
          action.payload.comment
        ]
      };
    default:
      return state;
  }
}
