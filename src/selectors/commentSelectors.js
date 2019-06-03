export const getComments = (state, id) => {
  return state.comments[id] || [];
};
