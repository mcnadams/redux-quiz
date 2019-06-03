export const getPaging = state => { 
  return state.paging.pages;
};
export const getPagingLoading = state => state.paging.loading;
export const getPagingError = state => state.paging.error;
