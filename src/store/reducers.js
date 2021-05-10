import { SEARCH } from '../helpers/js/const';
import { SEARCH_CHANGE, SEARCH_RESET, SEARCH_RESULT, TOGGLE_SIDEBAR } from './actions';

const initialState = {
  showSidebar: false,
  search: {
    inputValue: '',
    isLoading: false,
    result: [],
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
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