import { Action } from 'redux';
import { ArticleList, ArticlesById } from '../types';

type ReduxAction = Action<string>;
type ReduxPayloadAction<T> = ReduxAction & {
  payload: T
};

export const LOAD_DATA_ARTICLE_LIST = 'LOAD_DATA_ARTICLE_LIST';

export const PUT_DATA_ARTICLE_LIST = 'PUT_DATA_ARTICLE_LIST';

export const LOAD_DATA_ARTICLE = 'LOAD_DATA_ARTICLE';

export const PUT_DATA_ARTICLE = 'PUT_DATA_ARTICLE';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const SEARCH_CHANGE = 'SEARCH_CHANGE';

export const SEARCH_RESET = 'SEARCH_RESET';

export const SEARCH_RESULT = 'SEARCH_RESULT';

export function actionLoadDataArticleList(): ReduxAction {
  return {
    type: LOAD_DATA_ARTICLE_LIST,
  };
}

export function actionPutDataArticleList(data: ArticleList): ReduxPayloadAction<ArticleList> {
  return {
    type: PUT_DATA_ARTICLE_LIST,
    payload: data,
  };
}

export function actionLoadDataArticle(id: number): ReduxPayloadAction<number> {
  return {
    type: LOAD_DATA_ARTICLE,
    payload: id,
  };
}

export function actionPutDataArticle(data: ArticlesById): ReduxPayloadAction<ArticlesById> {
  return {
    type: PUT_DATA_ARTICLE,
    payload: data,
  };
}

export function actionToggleSidebar(oldValue: boolean): ReduxPayloadAction<boolean> {
  return {
    type: TOGGLE_SIDEBAR,
    payload: oldValue,
  };
}

export function actionSearchChange(value: string): ReduxPayloadAction<string> {
  return {
    type: SEARCH_CHANGE,
    payload: value,
  };
}

export function actionSearchReset(): ReduxAction {
  return {
    type: SEARCH_RESET,
  };
}

export function actionSearchResult(resultList: ArticleList = []): ReduxPayloadAction<ArticleList> {
  return {
    type: SEARCH_RESULT,
    payload: resultList,
  };
}