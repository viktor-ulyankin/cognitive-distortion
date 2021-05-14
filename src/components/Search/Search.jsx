import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import useDebounce from '../../hooks/useDebounce';
import { actionSearchChange, actionSearchReset, actionSearchResult } from '../../store/actions';
import { SEARCH } from '../../helpers/js/const';

const Search = () => {
  const thisState = useSelector((state) => state.search);
  const articleList = useSelector((state) => state.articleList);
  const dispatch = useDispatch();
  const inputValueDebounce = useDebounce(thisState.inputValue.length >= SEARCH.MIN_QTY_LETTERS ? thisState.inputValue : '', 500);
  const refComponent = useRef(null);

  // Debounce вывод результатов поиска
  useEffect(() => {
    if (
      typeof inputValueDebounce === 'string' && inputValueDebounce.length >= SEARCH.MIN_QTY_LETTERS
      && Array.isArray(articleList) && articleList.length
    ) {
      // setTimeout(() => {
      const filter = (item) => item.name.toLowerCase().includes(inputValueDebounce.toLowerCase());

      dispatch(actionSearchResult(articleList.filter(filter)));
      // }, 500); // эмуляция задержки сетевого соединения
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
    if (thisState.result.length) {
      return (
        <div className="search__result">
          {thisState.result.map((article) => <Link key={article.id} to={`/article/${article.id}`} onClick={handleResultLinkClick} className="search__result-link">{article.name}</Link>)}
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
        <input value={thisState.inputValue} onChange={handleInputChange} className="search__input" type="text" placeholder="Когнитивное искажение" autoCapitalize="none" autoComplete="none" maxLength="128" />

        <div className={`search__loading${thisState.isLoading ? ' search__loading_active' : ''}`}>
          <Loader />
        </div>
      </div>

      <Result />
    </div>
  );
};

export default Search;