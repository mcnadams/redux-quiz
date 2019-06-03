import { CREATE_COMMENT, createComment } from './commentActions';

describe('comment actions', () => {
  it('creates a comment action', () => {
    expect(createComment(1, 'hi')).toEqual({
      type: CREATE_COMMENT,
      payload: {
        id: 1,
        comment: 'hi'
      }
    });
  });
});
