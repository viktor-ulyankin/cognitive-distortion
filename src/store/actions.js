export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const SEARCH_CHANGE = 'SEARCH_CHANGE';

export const SEARCH_RESET = 'SEARCH_RESET';

export const SEARCH_RESULT = 'SEARCH_RESULT';

export function actionToggleSidebar(oldValue) {
  return {
    type: 'TOGGLE_SIDEBAR',
    payload: oldValue,
  };
}

export function actionSearchChange(value) {
  return {
    type: 'SEARCH_CHANGE',
    payload: value,
  };
}

export function actionSearchReset() {
  return {
    type: 'SEARCH_RESET',
  };
}

export function actionSearchResult(resultList = []) {
  return {
    type: 'SEARCH_RESULT',
    payload: resultList,
  };
}