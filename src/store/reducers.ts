import { AnyAction } from 'redux';
import { SEARCH } from '../helpers/js/const';
import {
  PUT_DATA_ARTICLE_LIST,
  PUT_DATA_ARTICLE,
  SEARCH_CHANGE,
  SEARCH_RESET,
  SEARCH_RESULT,
  TOGGLE_SIDEBAR,
} from './actions';
import { ArticleList, ArticlesById } from '../types';

export type RootState = {
  showSidebar: boolean,
  search: {
    inputValue: string,
    isLoading: boolean,
    result: ArticleList,
  },
  articleList: ArticleList,
  articles: ArticlesById,
}

const initialState: RootState = {
  showSidebar: false,
  search: {
    inputValue: '',
    isLoading: false,
    result: [],
  },
  articleList: [],
  articles: null,
};

function reducer(state: RootState = initialState, action: AnyAction) {
  switch (action.type) {
    case PUT_DATA_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.payload,
      };
    case PUT_DATA_ARTICLE:
      return {
        ...state,
        articles: {
          ...state.articles,
          [action.payload.id]: action.payload,
        },
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !action.payload,
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        search: {
          ...state.search,
          inputValue: action.payload,
          isLoading: action.payload.length >= SEARCH.MIN_QTY_LETTERS,
        },
      };
    case SEARCH_RESET:
      return {
        ...state,
        search: {
          ...initialState.search,
        },
      };
    case SEARCH_RESULT:
      return {
        ...state,
        search: {
          ...state.search,
          isLoading: false,
          result: action.payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;