export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (id, comment) => ({
  type: CREATE_COMMENT,
  payload: { id, comment }
});
