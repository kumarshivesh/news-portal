import { fetchArticles } from '../../api';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({
  type: FETCH_ARTICLES_REQUEST,
});

export const fetchArticlesSuccess = (articles, totalResults) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles, totalResults },
});

export const fetchArticlesFailure = (error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error,
});

export const getArticles = (category, page, searchTerm = '') => async (dispatch) => {
  dispatch(fetchArticlesRequest());
  try {
    const data = await fetchArticles(category, page, searchTerm);
    dispatch(fetchArticlesSuccess(data.articles, data.totalResults));
  } catch (error) {
    dispatch(fetchArticlesFailure(error.message));
  }
};
