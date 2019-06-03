export const getPaging = state => { 
  console.log(state.paging.pages);
  return state.paging.pages;
};
export const getPagingLoading = state => state.paging.loading;
export const getPagingError = state => state.paging.error;
