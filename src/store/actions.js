export const LOAD_DATA_ARTICLE_LIST = 'LOAD_DATA_ARTICLE_LIST';

export const PUT_DATA_ARTICLE_LIST = 'PUT_DATA_ARTICLE_LIST';

export const LOAD_DATA_ARTICLE = 'LOAD_DATA_ARTICLE';

export const PUT_DATA_ARTICLE = 'PUT_DATA_ARTICLE';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const SEARCH_CHANGE = 'SEARCH_CHANGE';

export const SEARCH_RESET = 'SEARCH_RESET';

export const SEARCH_RESULT = 'SEARCH_RESULT';

export function actionLoadDataArticleList() {
  return {
    type: LOAD_DATA_ARTICLE_LIST,
  };
}

export function actionPutDataArticleList(data) {
  return {
    type: PUT_DATA_ARTICLE_LIST,
    payload: data,
  };
}

export function actionLoadDataArticle(id) {
  return {
    type: LOAD_DATA_ARTICLE,
    payload: id,
  };
}

export function actionPutDataArticle(data) {
  return {
    type: PUT_DATA_ARTICLE,
    payload: data,
  };
}

export function actionToggleSidebar(oldValue) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: oldValue,
  };
}

export function actionSearchChange(value) {
  return {
    type: SEARCH_CHANGE,
    payload: value,
  };
}

export function actionSearchReset() {
  return {
    type: SEARCH_RESET,
  };
}

export function actionSearchResult(resultList = []) {
  return {
    type: SEARCH_RESULT,
    payload: resultList,
  };
}