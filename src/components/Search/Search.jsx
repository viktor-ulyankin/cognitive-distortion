import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import useDataArticleList from '../../hooks/useDataArticleList';
import useDebounce from '../../hooks/useDebounce';
import { actionSearchChange, actionSearchReset, actionSearchResult } from '../../store/actions';
import { SEARCH } from '../../helpers/js/const';

const Search = () => {
  const state = useSelector((s) => s.search);
  const dispatch = useDispatch();
  const [articleList] = useDataArticleList();
  const inputValueDebounce = useDebounce(state.inputValue.length >= SEARCH.MIN_QTY_LETTERS ? state.inputValue : '', 500);
  const refComponent = useRef(null);

  // Debounce вывод результатов поиска
  useEffect(() => {
    if (
      typeof inputValueDebounce === 'string' && inputValueDebounce.length >= SEARCH.MIN_QTY_LETTERS
      && Array.isArray(articleList) && articleList.length
    ) {
      setTimeout(() => { // для теста соединения
        const filter = (item) => item.name.toLowerCase().includes(inputValueDebounce.toLowerCase());

        dispatch(actionSearchResult(articleList.filter(filter)));
      }, 1000);
    } else {
      dispatch(actionSearchResult());
    }
  }, [articleList, dispatch, inputValueDebounce]);

  // Обработка outside-клика
  useEffect(() => {
    function handleClick(e) {
      if (!refComponent.current.contains(e.target)) {
        dispatch(actionSearchReset());
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dispatch]);

  function Result() {
    if (state.result.length) {
      return (
        <div className="search__result">
          {state.result.map((article) => <Link key={article.id} to={`/article/${article.id}`} onClick={handleResultLinkClick} className="search__result-link">{article.name}</Link>)}
        </div>
      );
    }

    return null;
  }

  function handleInputChange(event) {
    dispatch(actionSearchChange(event.target.value));
  }

  function handleResultLinkClick() {
    dispatch(actionSearchReset());
  }

  return (
    <div className="search" ref={refComponent}>
      <div className="search__form">
        <div className="search__icon" />
        <input value={state.inputValue} onChange={handleInputChange} className="search__input" type="text" placeholder="Когнитивное искажение" autoCapitalize="none" autoComplete="none" maxLength="128" />

        <div className={`search__loading${state.isLoading ? ' search__loading_active' : ''}`}>
          <Loader />
        </div>
      </div>

      <Result />
    </div>
  );
};

export default Search;