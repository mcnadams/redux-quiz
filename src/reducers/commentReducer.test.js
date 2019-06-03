import { createComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('creates a comment', () => {
    const newState = reducer({}, createComment(1, 'hi'));
    expect(newState).toEqual({ '1': ['hi'] });
  });
});
